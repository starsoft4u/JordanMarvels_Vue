<template>
  <div class="main-container">
    <div class="content-box">
      <div class="title pt-4">Add New Package Categories</div>
      <div class="detail mt-3">you can add new Package Category here.</div>
      <div class="label mt-4">Enter Package Category</div>
      <div class="mt-2">
        <input type="text" v-model="category_name" placeholder="Name of Package Category" />
      </div>
      <div class="center mt-5">
        <button @click="save_category">ADD package Category now</button>
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
      category_name: "Category 1"
    };
  },
  methods: {
    save_category() {
      if (!this.category_name) {
        this.$alert("Please enter category name");
        return;
      }
      this.$router.replace({ name: "CategoryAddSuccess" });
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
    input {
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
  }
}
</style>
