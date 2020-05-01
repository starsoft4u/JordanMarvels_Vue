<template>
  <div class="category-all main-container">
    <div class="content-box">
      <div class="title pt-4">All Package Categories</div>
      <div class="detail mt-3">you can add new Package Category here.</div>
      <el-table :data="tableData" class="mt-3">
        <el-table-column prop="category_no" label="Categories No." width="100"></el-table-column>
        <el-table-column prop="category_name" label="Package Categories Name" width="230"></el-table-column>
        <el-table-column prop="category_date" label="Date" width="180"></el-table-column>
        <el-table-column label="Edit">
          <template>
            <el-button size="small" @click="show_category_edit_dialog">
              <img src="../../assets/images/ic_edit_black.svg" />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="Delete">
          <template>
            <el-button size="small">
              <img src="../../assets/images/ic_user_delete.svg" />
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="form-inline flex-container flex-center">
        <el-button class="more-button">Load more</el-button>
      </div>
    </div>

    <el-dialog
      :visible.sync="category_edit_dialog_visible"
      width="838px"
      center
      class="category_edit_dialog"
    >
      <span slot="title">
        <span class="dialog-title p-3">Edit Package Categories</span>
      </span>
      <div class="dialog-body">
        <div class="dialog-description">you can Edit Package Category here.</div>
        <div class="mt-2 label">Enter Package Category</div>
        <div class="mt-2">
          <input
            type="text"
            class="value"
            placeholder="The Family and Freiends "
            v-model="sel_category_name"
          />
        </div>
      </div>
      <span slot="footer">
        <div class="dialog-footer">
          <el-button @click="saveCategory">
            <span>EDIt package Category</span>
          </el-button>
          <el-button @click="category_edit_dialog_visible = false">
            <span>Cancel</span>
          </el-button>
        </div>
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="category_edit_success_dialog_visible"
      width="838px"
      center
      class="category_edit_success_dialog"
    >
      <span slot="title"></span>
      <div class="dialog-body">
        <div class="center p-3">
          <img src="../../assets/images/ic_success.svg" />
        </div>
        <div class="dialog-description">
          The package category
          <b>The Family and Freiends</b>
          <br />has been edit successfully
        </div>
      </div>
      <span slot="footer">
        <div class="dialog-footer">
          <el-button @click="goCategoryAll">
            <span>View All packages categories</span>
          </el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      category_edit_dialog_visible: false,
      category_edit_success_dialog_visible: false,
      sel_category_name: "",
      tableData: [
        {
          category_no: 1,
          category_name: "Package Category 1",
          category_date: "12-02-2020"
        },
        {
          category_no: 2,
          category_name: "Package Category 2",
          category_date: "12-02-2020"
        },
        {
          category_no: 3,
          category_name: "Package Category 3",
          category_date: "12-02-2020"
        },
        {
          category_no: 4,
          category_name: "Package Category 4",
          category_date: "12-02-2020"
        },
        {
          category_no: 5,
          category_name: "Package Category 5",
          category_date: "12-02-2020"
        }
      ]
    };
  },
  methods: {
    show_category_edit_dialog() {
      this.sel_category_name = this.tableData[0].category_name;
      this.category_edit_dialog_visible = true;
    },
    saveCategory() {
      this.category_edit_dialog_visible = false;
      this.category_edit_success_dialog_visible = true;
    },
    goCategoryAll(){
      this.category_edit_success_dialog_visible=false;
      // this.$router.replace({name:'CategoryAll'});
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
    .el-table {
      button {
        border: none;
        border-radius: 50%;
      }
    }
    .more-button {
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
    .more-button:hover,
    .more-button:active {
      border: 1px solid grey;
    }
  }

  .category_edit_dialog {
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
    .dialog-body {
      padding: 16px 32px;
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
      .value {
        background: rgba(199, 178, 153, 0.0898164);
        border: 1px solid rgba(80, 71, 60, 0.1);
        box-sizing: border-box;
        width: 100%;
        height: 55px;
        padding: 17px;
      }
    }
    .dialog-footer {
      padding: 16px 32px;
      button {
        min-width: 163px;
        height: 44px;
        background: #ffc11f;
        border-radius: 5px;
        box-sizing: border-box;
        border-radius: 6px;
        span {
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
        img {
          width: 15px;
          height: 18px;
          margin-inline-start: 18px;
        }
      }
    }
  }
  .category_edit_success_dialog {
    .dialog-body {
      padding:50px 32px 16px 32px;
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
  }
}
</style>