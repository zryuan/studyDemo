<template>
  <div>
    <p class="if" v-if="isIf">IF!!!!!!!</p>
    <p class="show" v-show="isShow">Show!!!!</p>
    <button @click="myClick">MyClick</button>
  </div>
</template>

<script setup>
import { onBeforeMount, useAttrs } from "vue";

const isIf = true;
const isShow = false;

document.addEventListener("click", () => {
  console.log("qqqq");
});
console.log("setup");

const emit = defineEmits(["myClick"]);

function myClick() {
  emit("myClick");
}

const attrs = useAttrs();

console.log("attrs", attrs);

onBeforeMount(() => {
  console.log("mount");
});
</script>

<style lang="scss" scoped>
</style>