<template>
  <div class="menu-container flex-container flex-column flex-between">
    <div>
      <div class="logo">
        <img src="../assets/images/logo2.png" />
      </div>

      <el-menu
        :default-active="$route.path.replace('/success','')"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#50473c"
        hover-background-color="#ff0"
        text-color="#fff"
        active-text-color="#cde"
      >
        <el-menu-item index="/dashboard/home" class="mi-1">
          <img src="../assets/images/MenuIcon-Home.png" />
          <span>Home</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <img src="../assets/images/MenuIcon-customer.png" />
            Customers
          </template>
          <el-menu-item index="/dashboard/customer/add">Add new customers</el-menu-item>
          <el-menu-item index="/dashboard/customer/all">All customers</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <img src="../assets/images/MenuIcon-tourpackages.png" />
            <span>Tour Packages</span>
          </template>
          <el-menu-item index="/dashboard/package/all">View all Packages</el-menu-item>
          <el-menu-item index="/dashboard/package/add">Add new Packages</el-menu-item>
          <el-menu-item index="/dashboard/category/all">Packages Categories</el-menu-item>
          <el-menu-item index="/dashboard/category/add">Add Packages Category</el-menu-item>
        </el-submenu>
        <el-menu-item index="/dashboard/package/inquiry" class="mi-1">
          <img src="../assets/images/MenuIcon-package inquary.png" />
          <span>Packages inquiry</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <img src="../assets/images/MenuIcon-discount.png" />
            <span>Discounts</span>
          </template>
          <el-menu-item index="/dashboard/discount/add">Add New Discount</el-menu-item>
          <el-menu-item index="/dashboard/discount/all">View All Discounts</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <img src="../assets/images/MenuIcon-booking.png" />
            <span>Bookings</span>
          </template>
          <el-menu-item index="/dashboard/booking/tour/all">Tour bookings</el-menu-item>
          <el-menu-item index="/dashboard/booking/car/all">Car bookings</el-menu-item>
          <el-menu-item index="/dashboard/car/all">View all Cars</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="copyright form-inline">
      <img src="../assets/images/copyright2.svg" />
      <span>Copyright 2020. All Rights Reserved</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Menu",
  components: {},
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath, el) {
      // console.log(key, keyPath, el);
    },
    handleClose(key, keyPath, el) {
      // console.log(key, keyPath, el);
    },
    handleSelect(key, keyPath, el) {
      console.log("this.$route", this.$route);
      console.log(key, keyPath, el);
      if (el && el.index && this.$route.path != el.index) {
        this.$router.push({ path: el.index });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container {
  background-color: #50473c;
  width: 300px;
  min-height: 100vh;
  .logo {
    padding: 29px;
  }
  .el-menu {
    margin-top: 50px;
    border: none;
    text-align: left;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.94px;
    img {
      width: 23px;
      height: 23px;
      margin-inline-end: 18px;
    }
  }
  .copyright {
    padding: 29px;
    img {
      width: 13px;
      height: 13px;
      margin-right: 6px;
    }
    span {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      // text-align: right;

      color: #c7b299;
    }
  }
}
.el-submenu__title:hover {
  background-color: #ff0;
}
.el-menu-item.is-active {
  background-color: #cca575 !important;
}
.el-menu-item.is-active::after {
  content: "";
  border-style: solid;
  border-width: 0.7em;
  border-color: transparent transparent transparent #cca575;
  // border-color: transparent transparent transparent red;
  float: right;
  position: relative;
  margin-top: 15px;
  margin-right: -65px;
}
.el-menu-item.mi-1.is-active::after {
  margin-top: 18px;
  margin-right: -40px;
}
</style>
