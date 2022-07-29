<template>
  <div>
    <button :class="`${type}`">{{ title ? title : "默认按钮名字" }}</button>
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
  padding: 10px;
}

.success {
  background-color: #07c160;
  color: #fff;
  border: 1px solid #07c160;
}
.success.is_plain {
    background-color: #fff;
    color: #07c160;
  border: 1px solid #07c160;
}

.info {
    background-color: #1989fa;
  color: #fff;
  border: 1px solid #1989fa;
}




</style>
