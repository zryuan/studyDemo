<template>
  <div class="virtual-list">
    <div
      class="container"
      :style="{
        height: `${backHeight}px`,
      }"
    >
      <ul
        ref="listEle"
        class="list"
        :style="{
          transform: `translateY(${transfarmHeight}px)`,
        }"
      >
        <li class="item" v-for="item in viewList" :key="item.id">
          {{ item.value }}
        </li>
      </ul>
    </div>
    <footer>
      <div ref="loadingEle" class="loading">
        {{ finish ? "没有更多数据...." : "加载中..." }}
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const sourceList = [];
const viewList = ref([]);
const itemHeight = 100; // 假设列表中一个项高度为40；
let size = 0;
const loadingEle = ref();
const backHeight = ref(0);
const listEle = ref();
let loading = false;
let isInitViewList = false;
const maxItemCount = 300;
let finish = false;

function createSourceData() {
  const len = sourceList.length;
  setTimeout(() => {
    for (let i = len; i < len + 40 && sourceList.length <= maxItemCount; i++) {
      const obj = {
        key: i,
        value: i,
      };
      sourceList.push(obj);
    }
    backHeight.value = sourceList.length * itemHeight;
    isInitViewList || updateViewList(0);
    isInitViewList = true;
    loading = false;
    finish = sourceList.length >= maxItemCount;
  }, 500);
}

function getSize() {
  const viewHeight = window.innerHeight;

  size = Math.ceil(viewHeight / itemHeight);
}

function updateViewList(startPoint) {
  viewList.value = sourceList.slice(startPoint, startPoint + size * 2);
}

function loadingData() {
  const observer = new IntersectionObserver(
    () => {
      const { top } = loadingEle.value.getBoundingClientRect();
      if (top <= window.innerHeight) {
        loading = true;
        createSourceData();
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );
  observer.observe(loadingEle.value);
}
// 判定滚动方向
let oldScrollY = 0;
const transfarmHeight = ref(0);
function handleScroll() {
  document.addEventListener("scroll", () => {
    if (loading) return;
    const { bottom, top } = listEle.value.getBoundingClientRect();
    if (scrollY > oldScrollY) {
      if (bottom <= innerHeight) {
        down(top);
      }
    } else {
      if (top >= 0 && scrollY > 0) {
        up(bottom);
      }
    }

    oldScrollY = scrollY;
  });
}

function down(top) {
  if (
    finish &&
    sourceList[sourceList.length - 1].key ===
      viewList.value[viewList.value.length - 1].key
  )
    return;
  top = Math.abs(top);
  const viewIndex = Math.floor(top / itemHeight);
  const index = sourceList.findIndex((item) => {
    return item.key === viewList.value[viewIndex].key;
  });
  const targetEle = document.querySelectorAll(".item")[viewIndex];
  /* eslint-disable */
  const targetTop = targetEle.getBoundingClientRect().top;
  const bodyTop = document.body.getBoundingClientRect().top;
  transfarmHeight.value = Math.abs(bodyTop - targetTop);
  updateViewList(index);
}

function up(bottom) {
  const translateHeight = bottom - innerHeight;
  const lastItemNum = Math.floor(translateHeight / itemHeight);
  const viewIndex = viewList.value.length - 1 - lastItemNum;
  const targetEle = document.querySelectorAll(".item")[viewIndex];
  const targetBottom = targetEle.getBoundingClientRect().bottom - innerHeight;
  const lastItemIndex = sourceList.findIndex((item) => {
    return item.key === viewList.value[viewIndex].key;
  });
  transfarmHeight.value = Math.max(
    transfarmHeight.value - translateHeight + targetBottom,
    0
  );
  updateViewList(Math.max(lastItemIndex + 1 - 2 * size, 0));
}

onMounted(() => {
  loadingData();
  handleScroll();
}),
  getSize();
</script>

<style lang="scss" scoped>
.item {
  height: 100px;
}

.loading {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

// .container {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }
</style>