<template>
  <!-- <input type="text" :value="num" @input="num = $event.target.value" />
  <div>{{ num }}</div> -->

  <ModelComp v-model="text" />
  <div>{{ text }}</div>
  <ModelComp2 v-model:text="text2" v-model:num="num" />
  <div>{{ text2 }}</div>
  <div>{{ num }}</div>
</template>

<script>
import { ref } from "vue";
import ModelComp from "@/components/ModelComp.vue";
import ModelComp2 from "@/components/ModelComp2.vue";

export default {
  name: "App",
  components: {
    ModelComp,
    ModelComp2,
  },
  setup() {
    const num = ref(0);
    const text = ref("111");
    const text2 = ref("222");
    return {
      num,
      text,
      text2,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
