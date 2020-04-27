
<template>
  <el-dialog :visible="props.visible" :before-close="beforeClose" width="838px" center>
    <span slot="title"></span>
    <div class="dialog-body">
      <div class="center p-3 pt-5">
        <img src="../assets/images/ic_success.svg" />
      </div>
      <div class="dialog-description"><b>{{props.target}}</b>{{props.description}}</div>
    </div>
    <span slot="footer">
      <div class="dialog-footer">
        <el-button @click="props.visible=false">
          <span>Close</span>
        </el-button>
      </div>
    </span>
  </el-dialog>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: ["props"],
  methods: {
    beforeClose(done) {
      this.$emit("update:visible", false);
      done();
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog-body {
  padding: 50px 32px 16px 32px;
  .dialog-description {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    text-align: center;

    color: #50473c;
  }
}
.dialog-footer {
  padding: 16px 32px;
  button {
    background: #ffffff;
    border: 1px solid #c7b299;
    box-sizing: border-box;
    border-radius: 6px;
    span {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.5px;
      text-transform: uppercase;

      color: #c7b299;
    }
  }
}
</style>