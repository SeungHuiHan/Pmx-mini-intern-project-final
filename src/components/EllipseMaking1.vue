<template>
  <div>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <g>
        <ellipse
          v-for="(ellipse, index) in ellipses"
          :key="index"
          :cx="ellipse.cx"
          :cy="ellipse.cy"
          :rx="ellipse.rx"
          :ry="ellipse.ry"
          :stroke="ellipse.stroke"
          :stroke-dasharray="ellipse.dashArray"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    addEllipse: Function, // 부모 컴포넌트로부터 addEllipse 함수를 전달받음
  },
  data() {
    return {
      ellipses: [], // 타원 배열 초기화
    };
  },
  methods: {
    // 타원 추가 메서드
    addEllipse(newEllipse) {
      this.ellipses.push(newEllipse);
    },
  },
};
</script>

<style>
.btn {
  margin-right: 10px;
}

ellipse {
  cursor: move;
}
circle {
  cursor: pointer;
}
</style>
