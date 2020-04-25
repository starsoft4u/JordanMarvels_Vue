<template>
  <div>
    <div class="forgot container flex-container">
      <div class="left-container flex-container flex-column flex-between">
        <div>
          <div class="logo-box">
            <img src="../../assets/images/logo.png" />
          </div>
          <div class="title-box upper-case">
            <span>Password Reset</span>
          </div>
          <div class="description-box mt-2">
            <span>Suspendisse feugiat sapien ut ex volutpat facilisis. ut faucibus ligula pellentesque semper</span>
          </div>
          <div class="input-group flex-container mt-5">
            <img src="../../assets/images/ic_email.svg" />
            <input
              type="text"
              class="form-control"
              placeholder="Your email"
              style="flex:1;border:none"
            />
          </div>
          <button class="w-100 mt-5 upper-case" @click="send()">Reset Password</button>
        </div>
        <div class="mt-3 mb-4 flex-container form-inline">
          <img src="../../assets/images/copyright.svg" />
          <span>Copyright 2020. All Rights Reserved</span>
        </div>
      </div>
      <div class="right-container">
        <img width="792" height="1024" src="../../assets/images/banner2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forgot",

  methods: {
    send() {
      this.$router.replace({ name: "Sent" });
    }
  }
};
</script>
<style lang="scss" scoped>
.left-container {
  background: #fff;
  width: 648px;
  min-height: 100vh;
  padding: 0 80px;

  .logo-box {
    margin-top: 90px;
  }
  .title-box {
    margin-top: 85px;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5;
    text-align: start;
  }
  .input-group {
    border: 1px solid rgba(80, 71, 60, 0.1);
    height: 60px;
    * {
      margin: auto;
    }
    img {
      width: 27px;
      height: 27px;
      margin: auto 15px;
    }
    input {
      padding-left: 57px;
      margin-left: -57px;
      background: none;
      height: 100%;
    }
  }
  a {
    text-decoration: underline;
    cursor: pointer;
  }
  button {
    height: 50px;
    color: #50473c;
    font-weight: bold;
    background-color: #ffc11f;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  button:hover,
  button:active {
    border: 1px solid grey;
  }
}
.right-container {
  width: 792px;
}
</style>
