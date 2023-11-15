<template>
  <div id="app">
    <!-- <input type="text" :value="num" @input="num = $event.target.value" /> -->
    <!-- <input type="text" v-model="num" /> -->
    <!-- <textarea v-model="num" cols="30" rows="10"></textarea> -->
    <!-- <input type="radio" v-model="checked" value="a" /> -->
    <!-- <input type="radio" :checked="checked == 'b'" @change="checked = $event.target.value" value="b" /> -->
    <!-- <input type="radio" v-model="checked" value="b" /> -->
    <!-- <div>{{ num }}</div> -->
    <!-- <input type="checkbox" value="a" v-model="checkedList" />
    <input type="checkbox" value="b" v-model="checkedList" />
    <input type="checkbox" value="c" v-model="checkedList" />
    <input
      type="checkbox"
      value="c"
      :checked="checkedList.includes('c')"
      @change="checkChange('c')"
    />
    <div>{{ checkedList }}</div>
    <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <select :value="selected" @change="selected = $event.target.value">
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
    </select>
    <div>{{ selected }}</div> -->
    <!-- <HomePage v-model="text" /> -->
    <SyncComp :text.sync="text" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
// import HomePage from "@/components/HomePage.vue";
import SyncComp from "@/components/SyncComp.vue";
export default {
  name: "App",
  components: {
    // HomePage,
    SyncComp,
  },
  data() {
    return {
      num: 123,
      checked: "a",
      checkedList: [],
      selected: "a",
      text: "aaa",
    };
  },
  methods: {
    checkChange(str) {
      const index = this.checkedList.indexOf(str);
      if (index === -1) {
        this.checkedList.push(str);
      } else {
        this.checkedList.splice(index, 1);
      }
    },
    selectChange(event) {
      console.log(event.target);
      this.selected = event.target.value;
    },
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
