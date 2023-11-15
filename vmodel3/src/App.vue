<script setup>
import { ref } from "vue";
import ModelComp from "./components/ModelComp.vue";
const text = ref("111");
</script>

<template>
  <div>
    <ModelComp v-model="text" />
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
