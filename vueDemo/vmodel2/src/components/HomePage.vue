<template>
  <div class="home">
    <div @click="update">{{ text }}</div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "text",
    event: "click",
  },
  props: {
    text: String,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    update() {
      this.num++;
      this.$emit("click", this.text + this.num);
    },
  },
};
</script>
<style lang="">
</style>