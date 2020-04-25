<template>
  <div class="main-container">
    <div class="content-box">
      <div class="title pt-4">All Packages</div>
      <div class="detail mt-3">List of all the available Packages in System</div>
      <el-table :data="tableData" class="mt-3">
        <el-table-column prop="package_name" label="Package Name" width="180"></el-table-column>
        <el-table-column prop="category_name" label="Packate Category" width="180"></el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
        <el-table-column label="View">
          <template>
            <el-button size="small">
              <img src="../../assets/images/ic-eye.svg" @click="show_detail_dialog" />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="Edit">
          <template>
            <el-button size="small">
              <img src="../../assets/images/ic-edit-black.svg" />
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="Delete">
          <template>
            <el-button size="small">
              <img src="../../assets/images/ic-user-delete.svg" />
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="form-inline flex-container flex-center">
        <el-button class="more-button">Load more</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="detail_dialog_visible" :modal-append-to-body="false" width="838px">
      <div slot="title" class="flex-container flex-between">
        <div class="tl-box"></div>
        <div class="dialog-title">Package Details</div>
        <div class="tr-box"></div>
      </div>
      <div class="flex-container">
        <div class="l-box flex-container flex-column">
          <div class="lt-box"></div>
          <div class="lb-box"></div>
        </div>
        <div class="l-profile flex-container flex-column center">
          <img src="../../assets/images/img-package1.png" />
          <span class="label mt-3">Package Name</span>
          <span class="name mt-3">The Honeymoon Delight</span>
        </div>
        <div class="content" style="flex:1">
          <div class="label">Package Descriptiopn</div>
          <div
            class="value mt-2"
          >Discover UNESCO–listed heritage and ancient treasures from a lost civilization on this Petra day trip from Amman. Visit the UNESCO–listed city of .</div>
          <div class="flex-container">
            <div style="flex:1">
              <div class="label mt-4">Package Price</div>
              <div class="value mt-2">$450/Per Couple</div>
            </div>
            <div style="flex:1">
              <div class="label mt-4">Package Category</div>
              <div class="value mt-2">Family & Couple</div>
            </div>
            <div style="flex:1">
              <div class="label mt-4">Trip Location</div>
              <div class="value mt-2">Petra city</div>
            </div>
          </div>
          <div class="label mt-4">Package Photo Gallery</div>
          <div class="photo-gallery flex-container flex-wrap">
            <img src="../../assets/images/img1.png" />
            <img src="../../assets/images/img2.png" />
            <img src="../../assets/images/img1.png" />
            <img src="../../assets/images/img2.png" />
            <img src="../../assets/images/img1.png" />
            <img src="../../assets/images/img2.png" />
            <img src="../../assets/images/img1.png" />
            <img src="../../assets/images/img2.png" />
          </div>

          <div class="mt-4">
            <el-button>
              <span>Edit Package</span>
              <img src="../../assets/images/ic-user-edit.svg" />
            </el-button>
            <el-button @click="detail_dialog_visible = false">
              <span>Delect Package</span>
              <img src="../../assets/images/ic-package-delete.svg" />
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PackageAll",
  components: {},
  data() {
    return {
      detail_dialog_visible: false,
      tableData: [
        {
          package_name: "Honeymoon Plus",
          category_name: "Couple Package",
          price: "$250/Couple"
        },
        {
          package_name: "Best Plus for 4",
          category_name: "Friends Package",
          price: "$50/Person"
        },
        {
          package_name: "Honeymoon Plus",
          category_name: "Couple Package",
          price: "$250/Couple"
        },
        {
          package_name: "Best Plus for 4",
          category_name: "Friends Package",
          price: "$50/Person"
        },
        {
          package_name: "Honeymoon Plus",
          category_name: "Couple Package",
          price: "$250/Couple"
        },
        {
          package_name: "Best Plus for 4",
          category_name: "Friends Package",
          price: "$50/Person"
        },
        {
          package_name: "Honeymoon Plus",
          category_name: "Couple Package",
          price: "$250/Couple"
        },
        {
          package_name: "Best Plus for 4",
          category_name: "Friends Package",
          price: "$50/Person"
        },
        {
          package_name: "Honeymoon Plus",
          category_name: "Couple Package",
          price: "$250/Couple"
        },
        {
          package_name: "Best Plus for 4",
          category_name: "Friends Package",
          price: "$50/Person"
        }
      ]
    };
  },
  methods: {
    show_detail_dialog() {
      this.detail_dialog_visible = true;
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
    .photo-gallery {
      img {
        width: 90px;
        height: 90px;
        margin-bottom: 16px;
        margin-right: 16px;
      }
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