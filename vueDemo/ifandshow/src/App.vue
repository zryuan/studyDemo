<template>
  <IfAndShow v-show="isIf" @my-click="hello"></IfAndShow>
  <button @click="switchIf">SWITCH</button>
</template>

<script setup>
import { ref } from "vue";
import IfAndShow from "./components/IfAndShow.vue";
const isIf = ref(true);

function switchIf() {
  isIf.value = !isIf.value;
}

function hello() {
  console.log("hello");
}
</script>

<style>
</style>
