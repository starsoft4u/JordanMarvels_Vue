<template>
  <div class="main-container">
    <div class="content-box">
      <div class="title pt-4">All customers</div>
      <div class="detail mt-3">List of all the available customer in System</div>
      <div class="flex-container grid-header form-inline mt-5">
        <div style="flex:40"></div>
        <div class="grid-th" style="flex:240">Name</div>
        <div class="grid-th" style="flex:240">Eamil</div>
        <div class="grid-th" style="flex:140">Date joined</div>
        <div class="grid-th center" style="flex:140">No. Bookings</div>
        <div class="grid-th center" style="flex:140">View</div>
        <div class="grid-th center" style="flex:100">Delete</div>
      </div>
      <div class="grid-body">
        <div v-for="index in 10" :key="index" class="grid-row flex-container form-inline">
          <div style="flex:40"></div>
          <div style="flex:240">Mazhar Sharif</div>
          <div style="flex:240">mazhar.shf@gmail.com</div>
          <div style="flex:140">12-02-2020</div>
          <div class="center" style="flex:140">06</div>
          <div class="center" style="flex:140;cursor:pointer;" @click="show_dialog">
            <img src="../../assets/images/ic-eye.svg" />
          </div>
          <div class="center" style="flex:100">
            <img src="../../assets/images/ic-user-delete.svg" />
          </div>
        </div>

        <div class="form-inline flex-container flex-center">
          <button>Load more</button>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialog_visible" :modal-append-to-body="false" width="838px">
      <div slot="title" class="flex-container flex-between">
        <div class="tl-box"></div>
        <div class="dialog-title">Customer Details</div>
        <div class="tr-box"></div>
      </div>
      <div class="flex-container">
        <div class="l-box flex-container flex-column">
          <div class="lt-box"></div>
          <div class="lb-box"></div>
        </div>
        <div class="l-profile flex-container flex-column center">
          <img src="../../assets/images/img-profile.png" />
          <span class="label mt-3">Full Name</span>
          <span class="name mt-3">Johan Mark</span>
        </div>
        <div class="content" style="flex:1">
          <div class="label mt-4">Date joined</div>
          <div class="value mt-2">24-12-2020</div>
          <div class="label mt-4">Number of bookings</div>
          <div class="value mt-2">45</div>
          <div class="label mt-4">Email Address</div>
          <div class="value mt-2">Johan@outlook.com</div>
          <div class="label mt-4">Mobile Number</div>
          <div class="value mt-2">+49 30 28873434</div>
          <div class="label mt-4">Country</div>
          <div class="value mt-2">Germany</div>
          <div class="label mt-4">Complete Address</div>
          <div class="value mt-2">Weinmeisterstraße 12-14, 10178 Berlin, Germany</div>
          <div class="center mt-5">
            <el-button>
              <span>Edit User</span>
              <img src="../../assets/images/ic-user-edit.svg" />
            </el-button>
            <el-button @click="dialog_visible = false">
              <span>Delect USer</span>
              <img src="../../assets/images/ic-user-delete-b.svg" />
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CustomerAll",
  components: {},
  data() {
    return {
      dialog_visible: false
    };
  },
  methods: {
    show_dialog() {
      this.dialog_visible = true;
    }
  }
};
</script>
<style lang="scss" scoped>


  .main-container {
    background-color: #f2f2f2;
    flex: 1;
    padding: 43px 88px 45px 106px;
    .content-box {
      background-color: white;
      .title {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        text-transform: uppercase;

        color: #50473c;
      }
      .detail {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */

        text-align: center;

        color: #50473c;
      }
      .grid-header {
        height: 58px;
        background: rgba(199, 178, 153, 0.0898164);
        border: 1px solid rgba(80, 71, 60, 0.1);
        box-sizing: border-box;
        .grid-th {
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;

          color: #50473c;
        }
      }
      .grid-body {
        background: #ffffff;
        box-shadow: 3px 3px 4px rgba(212, 212, 212, 0.268985);
        .grid-row {
          height: 44px;
          border-bottom: 1px solid rgba(204, 165, 117, 0.313839);
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;

          color: #50473c;
        }
      }

      button {
        width: 315px;
        height: 44px;
        background: #ffc11f;
        border-radius: 5px;
        padding: 12px auto;
        margin: 36px auto;

        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.46875px;
        text-transform: uppercase;

        color: #50473c;
      }
      button:hover,
      button:active {
        border: 1px solid grey;
      }
    }
  }
.el-dialog {
  .tl-box,
  .tr-box {
    width: 226px;
  }
  .tl-box {
    background-color: #50473c;
  }
  .dialog-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 90px;
    text-align: center;
    text-transform: uppercase;

    color: #50473c;
  }
  .l-box {
    // margin-top: -90px;
    width: 226px;
    // background-image:linear-gradient(to bottom,#50473c 190px,#c7b299);
    .lt-box {
      height: 189px;

      background: #50473c;
    }
    .lb-box {
      height: 415px;
      background: #c7b299;
    }
  }
  .l-profile {
    width: 226px;
    margin-top: 127px;
    margin-inline-start: -226px;
    img {
      width: 124px;
      height: 124px;
      margin: 0 auto;
    }
    .label {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #ffffff;
    }
    .name {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      color: #ffffff;
    }
  }
  .content {
    padding: 20px 63px;
    .label {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #50473c;

      mix-blend-mode: normal;
      opacity: 0.37;
    }
    .value {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      color: #50473c;
    }
  }
  button {
    width: 163px;
    height: 44px;
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
      letter-spacing: 0.5px;
      text-transform: uppercase;

      color: #c7b299;
    }
    img {
      width: 15px;
      height: 18px;
      margin-inline-start: 18px;
    }
  }
}
</style>