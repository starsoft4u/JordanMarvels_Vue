<template>
  <div>
    <div class="sent container flex-container">
      <div class="left-container flex-container flex-column flex-between">
        <div>
          <div class="logo-box">
            <img src="../../assets/images/logo.svg" />
          </div>
          <div class="title-box upper-case">
            <span>Password Reset</span>
          </div>
          <div class="description-box mt-2 flex-container">
            <div>
              <img src="../../assets/images/ic_inform.svg" />
            </div>
            <div style="width:300px;">
              <div>
                <span>
                  An email has been successfully sent to your
                  <b>registered email address</b>.
                </span>
              </div>
              <div class="mt-3">
                <a @click="toLogin()">Login to you account</a>
              </div>
              <div class="mt-3">
                <a @click="$router.replace({name:'Reset'})">(reset password test)</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 mb-4 flex-container form-inline">
          <img src="../../assets/images/ic_copyright_black.svg" />
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
  name: "Sent",

  methods: {
    toLogin() {
      this.$router.replace({ name: "Login" });
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
  .description-box {
    img {
      width: 27px;
      height: 27px;
      margin: 0 15px 0 0;
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
