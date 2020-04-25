<template>
  <div class="main-container">
    <div class="content-box">
      <div class="icon center">
        <img src="../../assets/images/ic_success.svg" />
      </div>
      <div class="msg center mt-3">
        <span>
          A new toure package
          <b>The Honeymoon Delight</b> has been
        </span>
        <br />
        <span>added successfully</span>
      </div>
      <div class="button center mt-5 pb-5">
        <button @click="view_all">
          <span>View all Countries</span>
          <img src="../../assets/images/ic-user.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerAddSuccess",
  components: {},
  data() {
    return {};
  },
  methods: {
    view_all() {
        this.$router.replace({name:'PackageAll'})
    }
  }
};
</script>
<style lang="scss" scoped>
.right-container {
  flex: 1;

  .main-container {
    background-color: #f2f2f2;
    flex: 1;
    padding: 43px 88px 27px 106px;
    .content-box {
      background-color: white;
      padding: 0 107px;
      .icon {
        padding-top: 101px;
      }
      .msg {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 25px;
        /* or 167% */

        text-align: center;
        letter-spacing: 0.703125px;

        color: #50473c;
      }

      button {
        width: 190px;
        height: 44px;
        background-color: #ffffff;
        border: 1px solid #c7b299;
        box-sizing: border-box;
        border-radius: 6px;

        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;

        color: #c7b299;
      }
      button:hover,
      button:active {
        border: 1px solid #a97;
      }
    }
  }
}
</style>
