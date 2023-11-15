<template>
  <div class="sync-comp">
    <div @click="update">{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
  methods: {
    update() {
      this.$emit("update:text", this.text + "1");
    },
  },
};
</script>
<style lang="">
</style>