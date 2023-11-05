<template>
  <div id="app">
    <div class="button-container">
      <button @click="zoomIn" class="btn btn-primary">
        <i class="fa fa-search-plus"></i> Zoom In
      </button>
      <button @click="zoomOut" class="btn btn-danger">
        <i class="fa fa-search-minus"></i> Zoom Out
      </button>
      <button @click="addEllipse" class="btn btn-warning">SVG 추가</button>
    </div>
    <ImageZoomPane1 ref="imageZoomPane1" />
    <!-- EllipseMaking1 컴포넌트를 렌더링 -->
    <EllipseMaking1 :addEllipse="addEllipse" />
  </div>
</template>

<script>
import ImageZoomPane1 from "./components/ImageZoomPane1.vue";
import EllipseMaking1 from "./components/EllipseMaking1.vue";

export default {
  components: {
    ImageZoomPane1,
    EllipseMaking1,
  },
  methods: {
    zoomIn() {
      this.$refs.imageZoomPane1.zoomIn();
    },
    zoomOut() {
      this.$refs.imageZoomPane1.zoomOut();
    },
    // 타원 추가 메서드
    addEllipse() {
      const newEllipse = {
        cx: 100, // 초기 X 위치
        cy: 100, // 초기 Y 위치
        rx: 30, // X 반지름
        ry: 20, // Y 반지름
        stroke: "yellow", // 테두리 색상
        dashArray: "5,5", // 점선 스타일 (예: 5px 실선, 5px 공백)
      };
      console.log("타원추가");
      // 이미 "EllipseMaking1" 컴포넌트에서 타원을 추가gka
    },
  },
};
</script>

<style>
.button-container {
  background-color: black;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
}

.btn {
  margin-right: 10px;
}

.btn-warning {
  background-color: yellow;
}
</style>
