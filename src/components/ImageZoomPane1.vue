<template>
  <div class="container-fluid p-0">
    <div
      class="jumbotron bg-dark text-center"
      style="height: 100vh; width: 100%"
    >
      <div
        class="img-fluid"
        :style="zoomStyle"
        @mousedown="startPan"
        @mousemove="panImage"
        @mouseup="endPan"
      >
        <ImageLoading1 @image-loaded="imageLoaded" />
      </div>
    </div>
  </div>
</template>

<script>
// ImageLoading.vue 컴포넌트를 가져옴
import ImageLoading1 from "./ImageLoading1.vue";
// EllipseMaking.vue 컴포넌트를 가져옴
//import EllipseMaking1 from "./EllipseMaking1.vue";

export default {
  components: {
    ImageLoading1,
  },
  data() {
    return {
      scale: 1,
      translateX: 0,
      translateY: 0,
      ellipses: [], // 타원 정보를 저장할 배열
    };
  },
  computed: {
    zoomStyle() {
      return {
        transform: `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`,
      };
    },
  },
  methods: {
    zoomIn() {
      this.scale += 0.1;
    },
    zoomOut() {
      this.scale -= 0.1;
    },
    startPan(event) {
      this.panning = true;
      this.startX = event.clientX - this.translateX;
      this.startY = event.clientY - this.translateY;
    },
    panImage(event) {
      if (this.panning) {
        this.translateX = event.clientX - this.startX;
        this.translateY = event.clientY - this.startY;
      }
    },
    endPan() {
      this.panning = false;
    },
    imageLoaded() {
      const loadedImage = this.$refs.loadedImage;
      const imageContainer = this.$refs.imageContainer;
      const naturalWidth = loadedImage.naturalWidth;
      const naturalHeight = loadedImage.naturalHeight;

      // 이미지가 로드된 후 image-container의 크기를 이미지 크기에 맞게 업데이트
      imageContainer.style.width = naturalWidth + "px";
      imageContainer.style.height = naturalHeight + "px";

      // 초기 설정
      this.scale = 1;
      this.translateX = 0;
      this.translateY = 0;
    },
  },
};
</script>

<style>
.btn {
  margin-right: 10px;
}
</style>
