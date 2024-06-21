<template>
  <v-container class="background">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 text-center">
          <h1 class="title">Current Matter: {{ currentText }}</h1>
          <h2 class="time">Time Left: {{ currentTime }}</h2>
          <v-row justify="center" class="mt-4">
            <v-btn
              color="primary"
              @click="startTimer"
              :disabled="status === STATUS.COUNTING || (currentItem.length === 0 && items.length === 0)"
            >
              <v-icon left>mdi-play</v-icon>
              Start
            </v-btn>
            <v-btn
              color="warning"
              @click="pauseTimer"
              :disabled="status !== STATUS.COUNTING"
            >
              <v-icon left>mdi-pause</v-icon>
              Pause
            </v-btn>
            <v-btn
              color="success"
              @click="finishTimer"
              :disabled="currentItem.length === 0"
            >
              <v-icon left>mdi-skip-next</v-icon>
              Next
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

definePage({
  meta: {
    title: '番茄鐘'
  }
})

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}
const status = ref(STATUS.STOP)

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()

  const { show, isSupported } = useWebNotification({
    title: 'Finished',
    body: currentItem.value,
    icon: new URL('@/assets/tomato.png', import.meta.url).href
  })
  if (isSupported.value) {
    show()
  }

  setFinishItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return 'Click Start'
  } else {
    return 'No Matters'
  }
})

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  font-family: Roboto, sans-serif;
}

.background {
  background: url(../assets/bgtomato3.jpg);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  background: rgba(241, 133, 10, 0.9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.title {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.time {
  font-size: 1.5em;
  color: #ff5722;
}

.v-btn {
  margin: 0 0.5em;
}

.v-btn v-icon {
  margin-right: 0.5em;
}
</style>
