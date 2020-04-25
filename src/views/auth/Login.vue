<template>
  <div>
    <div class="login container flex-container">
      <div class="left-container flex-container flex-column flex-between">
        <div>
          <div class="logo-box">
            <img src="../../assets/images/logo.png" />
          </div>
          <div class="title-box">
            <span>ADMIN LOGIN</span>
          </div>
          <div class="description-box mt-2">
            <span>Suspendisse feugiat sapien ut ex volutpat facilisis. ut faucibus ligula pellentesque semper</span>
          </div>
          <div class="input-group flex-container mt-5">
            <img src="../../assets/images/user.png" />
            <input
              type="text"
              class="form-control"
              placeholder="Your user name"
              style="flex:1;border:none"
            />
          </div>
          <div class="input-group flex-container mt-5">
            <img src="../../assets/images/pwd.png" />
            <input
              type="password"
              class="form-control"
              placeholder="Your password"
              style="flex:1;border:none"
            />
          </div>
          <div class="mt-3 flex-container flex-right">
            <a @click="toForgot()">Forgot password?</a>
          </div>
          <div class="form-inline mt-2">
            <label>
              <input
                type="checkbox"
                class="mr-3"
                style="border:1px solid #858585;border-radius:0;background:none;"
              />
              Remember my details
            </label>
          </div>
          <button class="w-100 mt-5" @click="login()">LOGIN</button>
          <div class="w-100 mt-5 mb-5 pb-5 center">
            <span>New User?</span>
            &nbsp;
            <a style="color:#C7B299;">Registered here</a>
          </div>
        </div>

        <div class="mt-3 mb-4 flex-container form-inline">
          <img src="../../assets/images/copyright.svg" />
          <span>Copyright 2020. All Rights Reserved</span>
        </div>
      </div>
      <div class="right-container">
        <img width="792" height="1024" src="../../assets/images/banner1.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  methods: {
    login() {
      localStorage.logged = true;
      this.$router.replace({ name: "Home" });
    },
    toForgot() {
      this.$router.push({ name: "Forgot" });
    }
  }
};
</script>
<style lang="scss" scoped>
.left-container {
  background: #fff;
  min-height: 100vh;
  width: 648px;
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
  input[type="checkbox"] {
    width: 22px;
    height: 22px;
  }
  a {
    text-decoration: underline;
    cursor: pointer;
    // text-underline-position: below;
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
