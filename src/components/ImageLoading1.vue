<template>
  <div>
    <img
      :src="imageUrl"
      alt="Loaded Image"
      @load="imageLoaded"
      ref="loadedImage"
    />
  </div>
</template>

<script>
export default {
  props: "imageLoaded",
  data() {
    return {
      imageUrl:
        "https://health.chosun.com/site/data/img_dir/2022/05/04/2022050401754_0.jpg", // 이미지 URL을 하드 코딩
    };
  },
  methods: {
    imageLoaded() {
      this.$emit("image-loaded");
    },
  },
};
</script>

<style>
img {
  max-height: 100%;
}
</style>
