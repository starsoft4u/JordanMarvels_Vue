<template>
  <div class="discount-all main-container">
    <div class="content-box">
      <div class="title pt-4">All Discounts</div>
      <div class="detail mt-3">you can add new Discount here.</div>
      <el-table :data="tableData" class="mt-3">
        <el-table-column prop="discount_name" label="Discount Name"></el-table-column>
        <el-table-column prop="discount_type" label="Discount Type"></el-table-column>
        <el-table-column prop="discount_amount" label="Discount Amount %"></el-table-column>
        <el-table-column prop="discount_category" label="Discount Category"></el-table-column>
        <el-table-column label="Edit" width="100">
          <template>
            <el-button size="small" @click="show_discount_edit_dialog">
              <img src="../../assets/images/ic_edit_black.svg" />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="Delete" width="100">
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
      :visible.sync="discount_edit_dialog_visible"
      width="838px"
      center
      class="discount_edit_dialog"
    >
      <span slot="title">
        <span class="dialog-title p-3">Edit Discount</span>
      </span>
      <div class="dialog-body">
        <div class="dialog-description">you can Edit Discount here.</div>

        <div class="mt-2 label">Discount Name</div>
        <div class="mt-2">
          <input
            type="text"
            class="value"
            placeholder="Enter Discount Name"
            v-model="sel_discount_name"
          />
        </div>
        <div class="mt-2 label">Discount Type</div>
        <div class="mt-2">
          <input
            type="text"
            class="value"
            placeholder="Enter Discount Type"
            v-model="sel_discount_type"
          />
        </div>
        <div class="mt-2 label">Discount Amount</div>
        <div class="mt-2">
          <input
            type="text"
            class="value"
            placeholder="Enter Discount Amount"
            v-model="sel_discount_amount"
          />
        </div>
        <div class="mt-2 label">Discount Category</div>
        <div class="mt-2">
          <select type="text" class="value" v-model="sel_discount_category">
            <option>Please select discount category</option>
          </select>
        </div>
      </div>
      <span slot="footer">
        <div class="dialog-footer">
          <el-button @click="saveDiscount">
            <span>Edit Discount Now</span>
          </el-button>
          <el-button @click="discount_edit_dialog_visible = false">
            <span>Cancel</span>
          </el-button>
        </div>
      </span>
    </el-dialog>

    <el-dialog
      :visible.sync="discount_edit_success_dialog_visible"
      width="838px"
      center
      class="discount_edit_success_dialog"
    >
      <span slot="title"></span>
      <div class="dialog-body">
        <div class="center p-3">
          <img src="../../assets/images/ic_success.svg" />
        </div>
        <div class="dialog-description">
          The Discount
          <b>Honmoon Freiends</b>
          <br />has been edit successfully
        </div>
      </div>
      <span slot="footer">
        <div class="dialog-footer">
          <el-button @click="goDiscountAll">
            <span>View All Discounts</span>
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
      discount_edit_dialog_visible: false,
      discount_edit_success_dialog_visible: false,
      sel_discount_name: "",
      sel_discount_type: "",
      sel_discount_amount: "",
      sel_discount_category: "",
      tableData: [
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        },
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        },
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        },
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        },
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        },
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        },
        {
          discount_name: "FamilyONE",
          discount_type: "Frinds and family",
          discount_amount: "13%",
          discount_category: "Discount Category 1"
        }
      ]
    };
  },
  methods: {
    show_discount_edit_dialog() {
      this.sel_discount_name = this.tableData[0].discount_name;
      this.discount_edit_dialog_visible = true;
    },
    saveDiscount() {
      this.discount_edit_dialog_visible = false;
      this.discount_edit_success_dialog_visible = true;
    },
    goDiscountAll() {
      this.discount_edit_success_dialog_visible = false;
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

  .discount_edit_dialog {
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
  .discount_edit_success_dialog {
    .dialog-body {
      padding: 50px 32px 16px 32px;
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