<template>
  <div class="header form-inline flex-container w-100">
    <div class style="flex:213"></div>
    <div class="search" style="flex:518">
      <div class="search-group flex-container">
        <input
          type="text"
          class="form-control"
          placeholder="Search here..."
          style="flex:1;border:none"
        />
        <img src="../assets/images/ic_search.svg" @click="search" />
      </div>
    </div>
    <div class style="flex:147"></div>
    <div class="notify-box" style="margin-right:32px;">
      <img class="notify-icon" src="../assets/images/ic_notify.svg" />
      <img class="notify-badge" src="../assets/images/ic_notify_badge.svg" />
    </div>
    <div class="profile">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img src="../assets/images/ic_profile.png" />
          &nbsp;
          <span>Hamza</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <a>
            <div class="flex-container m-3">
              <img class="profile-image m-3" src="../assets/images/ic_profile.png" />
              <div class="mr-5">
                <span class="profile-name">Hamza Nabulsi</span>
                <br />
                <span class="profile-email">nabulsi.hamza@gmail.com</span>
                <br />
                <span class="profile-role">(Admin)</span>
              </div>
            </div>
          </a>
          <hr />
          <a @click="add_new_user_dialog_visible=true">
            <div class="m-3">
              <img class="m-3" src="../assets/images/ic-user-add.svg" width="28" height="28" />
              <span class="profile-name">Add New User</span>
            </div>
          </a>

          <hr />
          <a @click="logout">
            <div class="m-3">
              <img class="m-3" src="../assets/images/ic-logout.svg" width="28" height="28" />
              <span class="profile-name">Logout</span>
            </div>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class style="flex:45"></div>

    <el-dialog
      :visible.sync="add_new_user_dialog_visible"
      width="838px"
      center
      id="add_new_user_dialog"
    >
      <span slot="title">
        <span class="dialog-title">ADD New User</span>
      </span>
      <div class="dialog-content">Please add new user by inviting them via email address</div>
      <div class="flex-container flex-center mt-4">
        <input
          type="text"
          class="dialog-input"
          placeholder="Email Address"
          v-model="add_new_user_email"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addNewUser">
          <span>Add New User</span>
          <img src="../assets/images/ic-user-add.svg" />
        </el-button>
        <el-button @click="add_new_user_dialog_visible = false">
          <span>Cancel</span>
        </el-button>
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="add_new_user_success_dialog_visible"
      width="838px"
      center
      id="add_new_user_success_dialog"
    >
      <div class="flex-container flex-center pt-5">
        <img src="../assets/images/ic_success.svg" width="40" height="40" />
      </div>
      <div class="dialog-content">
        <div class="description">New user invitation has been sent successfully to</div>
        <div class="email">johan@outlook.com</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="add_new_user_success_dialog_visible = false">
          <span>OK</span>
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      add_new_user_email: "",
      add_new_user_dialog_visible: false,
      add_new_user_success_dialog_visible: false
    };
  },
  methods: {
    search() {
      console.log("search");
    },
    logout() {
      this.$confirm("Are you sure LOGOUT?")
        .then(() => {
          localStorage.logged = false;
          this.$router.replace({ name: "Login" });
        })
        .catch(() => {});
    },
    addNewUser() {
      if (!this.add_new_user_email) {
        this.$alert("Please enter email address.");
        return;
      }
      this.add_new_user_dialog_visible = false;
      this.add_new_user_success_dialog_visible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 98px;

  .search-group {
    border: 1px solid rgba(80, 71, 60, 0.1);
    border-radius: 3px;
    height: 45px;
    * {
      margin: auto;
    }
    input {
      // padding-right: 50px;
      // margin-right: -50px;
      background: none;
      height: 100%;
    }
    img {
      width: 20px;
      height: 20px;
      margin: auto 15px;
    }
  }
  .notify-box {
    .notify-icon {
      width: 23px;
      height: 27px;
    }
    .notify-badge {
      width: 9px;
      height: 9px;
      margin-left: -10px;
      margin-top: -20px;
    }
  }
  .profile {
    .el-dropdown-link {
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        color: #50473c;
        font-weight: 600;
        font-size: 13px;
      }
      .el-icon-arrow-down {
        color: #cca575;
        font-size: 12px;
      }
    }
  }
}
.el-dropdown-menu {
  .profile-image {
    width: 65px;
    height: 65px;
  }
  .profile-name {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    text-transform: uppercase;
  }
  .profile-email {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #c7b299;
  }
  .profile-role {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;

    color: #50473c;
  }
}
#add_new_user_dialog {
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
  .dialog-content {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    text-align: center;

    color: #50473c;
  }
  .dialog-input {
    background: rgba(199, 178, 153, 0.0898164);
    border: 1px solid rgba(80, 71, 60, 0.1);
    box-sizing: border-box;
    width: 598px;
    height: 55px;
    padding: 17px;
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
#add_new_user_success_dialog {
  .description {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;
    letter-spacing: 0.703125px;

    color: #50473c;
  }
  .email {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;
    letter-spacing: 0.703125px;

    color: #50473c;
  }
}
</style>
