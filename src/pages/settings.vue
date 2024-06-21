<template>
  <v-container class="background">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <h1 class="text-center">Ringtone Settings</h1>
          <v-data-table :items="alarms" class="elevation-1 mt-4">
            <template v-slot:top>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Audition</th>
                  <th class="text-left">Select</th>
                </tr>
              </thead>
            </template>
            <template v-slot:item.name="{ item }">
              <td>{{ item.name }}</td>
            </template>
            <template v-slot:item.audition="{ item }">
              <td>
                <audio :src="item.file" controls></audio>
              </td>
            </template>
            <template v-slot:item.select="{ item }">
              <td>
                <v-radio-group v-model="selectedAlarm">
                  <v-radio :value="item.id"></v-radio>
                </v-radio-group>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

definePage({
  meta: {
    title: '番茄鐘 | 設定'
  }
})

const settings = useSettingsStore()
const { alarms, selectedAlarm } = storeToRefs(settings)
</script>

<style scoped>
.background {
  background: url(../assets/bgtomato2.jpg);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  background: rgba(69, 247, 238, 0.9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.elevation-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

audio {
  width: 100%;
}
</style>
