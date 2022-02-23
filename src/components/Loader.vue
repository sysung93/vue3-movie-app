<template>
  <div 
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      //vue내부에서 스타일바인딩에서 
      //카멜케이스를 대쉬케이스로 변환해준다
      zIndex
    }"
    :class="{
      absolute, 
      fixed}"
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      defualt: 2
    },
    //부모요소 기준의 가운데 배치
    absolute: {
      type: Boolean,
      defualt: false
    },
    //vue포트 기준의 가운데 배치
    fixed: {
      type: Boolean,
      defualt: false
    },
    zIndex: {
      type: Number,
      defualt: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  //position이 fixed이거나 absolute일때 가운데 정렬해주는 속성
  margin:auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.absolute {
    position: absolute;
  }
  &.pixed {
    position: fixed;
  }
}
</style>