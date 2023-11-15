<template>
  <div class="model-comp-2">
    <div @click="update">{{ text }}</div>
    <div @click="updateNum">{{ num }}</div>
  </div>
</template>
  
  <script setup>
const props = defineProps({
  text: {
    type: String,
  },
  num: {
    type: Number,
  },
});
const emit = defineEmits(["update:text", "update:num"]);
function update() {
  emit("update:text", props.text + "1");
}
function updateNum() {
  emit("update:num", props.num + "2");
}
</script>
  
  <style lang="scss" scoped>
</style>