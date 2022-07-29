<template>
  <div>
    <button :class="[type,size]">{{ title ? title : "默认按钮名字" }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    size: {
      type: String,
      default: 'default'
    },
  },

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
button {
  border: 1px solid #000;
  /* padding: 10px; */
  text-align: center;
}

.success {
  background-color: #07c160;
  color: #fff;
  border: 1px solid #07c160;
}

.info {
    background-color: #1989fa;
  color: #fff;
  border: 1px solid #1989fa;
}

.large {
  width: 240px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
}

</style>
