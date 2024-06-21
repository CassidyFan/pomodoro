<template>
  <v-container class="background">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <h1 class="text-center">To-do list</h1>
          <v-text-field
            variant="outlined"
            label="New Items"
            clearable
            append-icon="mdi-plus"
            @keydown.enter="onInputSubmit"
            @click:append="onInputSubmit"
            v-model="newItem"
            :rules="[rules.required, rules.length]"
            ref="newItemTextField"
          ></v-text-field>
          <v-data-table
            :headers="tableHeaders"
            :items="items"
            item-key="id"
          >
            <template v-slot:item.operate="{ item }">
              <template v-if="!item.edit">
                <v-btn icon @click="editItem(item.id)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="delItem(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <template v-else>
                <v-btn icon @click="onEditInputSubmit(item.id)">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <v-btn icon @click="cancelEditItem(item.id)">
                  <v-icon>mdi-undo</v-icon>
                </v-btn>
              </template>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" class="mt-5">
        <v-card class="pa-4">
          <h1 class="text-center">Finished</h1>
          <v-data-table
            :headers="finishedTableHeaders"
            :items="finishedItems"
            item-key="id"
          >
            <template v-slot:item.operate="{ item }">
              <v-btn icon @click="delFinishItem(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/stores/list'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '番茄鐘 | 清單'
  }
})

const list = useListStore()
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem, delFinishItem } = list
const { items, finishedItems } = storeToRefs(list)

const newItem = ref('')
const newItemTextField = ref(null)

const rules = {
  required: value => Boolean(value) || 'Field required',
  length: value => value.length >= 3 || 'Must be more than three words'
}

const onInputSubmit = async () => {
  const validate = await newItemTextField.value.validate()
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemTextField.value.reset()
}

const onEditInputSubmit = async id => {
  confirmEditItem(id)
}

const tableHeaders = [
  { text: 'Name', value: 'name' },
  { text: 'Operate', value: 'operate', sortable: false }
]

const finishedTableHeaders = [
  { text: 'Name', value: 'name' },
  { text: 'Operate', value: 'operate', sortable: false }
]
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  font-family: Roboto, sans-serif;
}

.background {
  background: url(../assets/bgtomato4.jpg);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  background: rgba(233, 137, 13, 0.9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.v-btn {
  color: #ff5722;
}
</style>
