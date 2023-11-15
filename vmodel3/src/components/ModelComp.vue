<template>
  <div class="model-comp">
    <div @click="update">{{ modelValue }}</div>
  </div>
</template>

<script setup>
import { useAttrs } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
function update() {
  console.log(props.modelValue);
  emit("update:modelValue", props.modelValue + "1");
}
const attrs = useAttrs();
console.log(attrs);
</script>

<style lang="scss" scoped>
</style>