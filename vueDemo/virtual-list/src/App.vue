<template>
  <virtualList />
</template>

<script>
import virtualList from "./components/virList.vue";
export default {
  name: "App",
  components: {
    virtualList,
  },
};
</script>

<style>
#app {
  border: 1px solid #000;
}
ul {
  list-style: none;
}
* {
  padding: 0;
  margin: 0;
}
</style>
