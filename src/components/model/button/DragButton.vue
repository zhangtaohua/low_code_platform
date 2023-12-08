<template>
  <div
    class="pos_abs"
    draggable="true"
    :style="options.style"
    @dragstart="dragstartHandle"
    @drag="dragHandle"
    @dragend="dragendHandle"
  >
    <el-button :type="options.el.type">{{ options.text }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const options = reactive({
  style: {
    width: "100px",
    height: "60px",
    top: "100px",
    left: "100px",
  },
  position: {
    x: 100,
    y: 100,
  },
  el: {
    text: "primary",
    type: "primary", // 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'(delete)
    size: "default", // 'large'| 'default'| 'small'
    plain: false,
    round: false,
    icon: "",
    circle: false,
  },
});

const startPos = {
  x: 0,
  y: 0,
};
const endPos = {
  x: 0,
  y: 0,
};

function dragstartHandle(event: any) {
  console.log("dragstartHandle", event);
  // startPos.x = event.target.offsetLeft;
  // startPos.y = event.target.offsetTop;
  startPos.x = event.clientX;
  startPos.y = event.clientY;
  return true;
}

function dragHandle(event: any) {
  endPos.x = event.clientX - startPos.x;
  endPos.y = event.clientY - startPos.y;
  options.style.left = options.position.x + endPos.x + "px";
  options.style.top = options.position.y + endPos.y + "px";
  return true;
}

function dragendHandle(event: any) {
  console.log("dragendHandle", event);
  endPos.x = event.clientX - startPos.x;
  endPos.y = event.clientY - startPos.y;
  options.position.x = options.position.x + endPos.x;
  options.position.y = options.position.y + endPos.y;
  options.style.left = options.position.x + "px";
  options.style.top = options.position.y + "px";
  return true;
}
</script>

<style lang="scss" scoped></style>
