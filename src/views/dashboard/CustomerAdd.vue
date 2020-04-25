<template>
  <div class="main-container">
    <div class="content-box">
      <div class="title pt-4">Add New customer</div>
      <div class="detail mt-3">Please add the details as per the given form</div>
      <div class="label mt-4">Full Name</div>
      <div class="mt-2">
        <input type="text" v-model="name" placeholder="Enter Full Name" />
      </div>
      <div class="label mt-4">Email Address</div>
      <div class="mt-2">
        <input type="text" v-model="email" placeholder="Enter Email Address" />
      </div>
      <div class="label mt-4">Mobile Number</div>
      <div class="mt-2">
        <input type="text" v-model="mobile_number" placeholder="Enter MobileNumber" />
      </div>
      <div class="label mt-4">Country</div>
      <div class="mt-2">
        <select placeholder="Select from list" v-model="country"></select>
      </div>
      <div class="label mt-4">Complete Address</div>
      <div class="mt-2">
        <textarea v-model="address" placeholder="Your Complete Address" rows="5"></textarea>
      </div>
      <div class="label mt-4">Password</div>
      <div class="mt-2">
        <input type="password" v-model="password" placeholder="Enter Password" />
      </div>
      <div class="label mt-4">Confirm Password</div>
      <div class="mt-2">
        <input type="password" v-model="confirm_password" placeholder="Enter Confirm Password" />
      </div>
      <div class="center mt-5">
        <button @click="add_customer">Add Customer Now</button>
      </div>
      <div class="center mt-4">
        <a>Cancel</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerAddSuccess",
  components: {},
  data() {
    return {
      name: "Johan Mark",
      email: "",
      mobile_number: "",
      country: "",
      address: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    add_customer() {
      if (!this.name) {
        this.$alert("Please Enter name");
        return;
      }
      this.$router.replace({ name: "CustomerAddSuccess" });
    }
  }
};
</script>
<style lang="scss" scoped>


  .main-container {
    background-color: #f2f2f2;
    flex: 1;
    padding: 43px 88px 27px 106px;
    .content-box {
      background-color: white;
      padding: 32px 107px;
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

      .label {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;

        color: #50473c;

        mix-blend-mode: normal;
        opacity: 0.97;
      }
      input,
      textarea,
      select {
        width: 100%;
        background: rgba(199, 178, 153, 0.0898164);
        border: 1px solid rgba(80, 71, 60, 0.1);
        // box-sizing: border-box;

        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height */

        color: #50473c;

        mix-blend-mode: normal;
        // opacity: 0.34;
        padding: 18px 12px;
      }
      input[type="text"],
      select {
        height: 55px;
      }

      button {
        width: 315px;
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
      a {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */

        text-align: center;
        text-decoration-line: underline;
        text-transform: uppercase;

        color: #50473c;
      }
    }
}
</style>
