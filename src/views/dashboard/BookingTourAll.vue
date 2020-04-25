<template>
  <div class="package-inquiry main-container">
    <div class="content-box">
      <div class="title pt-4">All tour bookings</div>
      <div class="detail mt-3">The list of special book enquiries</div>
      <el-table :data="tableData" class="mt-3">
        <el-table-column prop="package_name" label="Package Name"></el-table-column>
        <el-table-column prop="package_category" label="Package Category"></el-table-column>
        <el-table-column prop="sel_date" label="Date"></el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
        <el-table-column prop="user" label="User"></el-table-column>
        <el-table-column label="State">
          <template slot-scope="scope">
            <el-dropdown trigger="click">
              <el-button :type="scope.row.type" size="mini" style="width:110px;">
                {{scope.row.state}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-tag type="success" effect="dark" style="width:110px;" size="mini">In Progress</el-tag>
                <br />
                <el-tag type="danger" effect="dark" style="width:110px;" size="mini">Canceled</el-tag>
                <br />
                <el-tag type="warning" effect="dark" style="width:110px;" size="mini">Waiting</el-tag>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>

      <div class="form-inline flex-container flex-center">
        <el-button class="more-button">Load more</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          package_name: "Honeymoon Plus",
          package_category: "Couple Package",
          sel_date: "12-02-2020",
          price: "$250",
          user: "Mazhar Sharif",
          state: "In Progress",
          type: "success"
        },
        {
          package_name: "Honeymoon Plus",
          package_category: "Couple Package",
          sel_date: "12-02-2020",
          price: "$250",
          user: "Mazhar Sharif",
          state: "Waiting",
          type: "warning"
        },
        {
          package_name: "Honeymoon Plus",
          package_category: "Couple Package",
          sel_date: "12-02-2020",
          price: "$250",
          user: "Mazhar Sharif",
          state: "Canceled",
          type: "danger"
        },
        {
          package_name: "Honeymoon Plus",
          package_category: "Couple Package",
          sel_date: "12-02-2020",
          price: "$250",
          user: "Mazhar Sharif",
          state: "In Progress",
          type: "info"
        },
        {
          package_name: "Honeymoon Plus",
          package_category: "Couple Package",
          sel_date: "12-02-2020",
          price: "$250",
          user: "Mazhar Sharif",
          state: "In Progress",
          type: "primary"
        },
        {
          package_name: "Honeymoon Plus",
          package_category: "Couple Package",
          sel_date: "12-02-2020",
          price: "$250",
          user: "Mazhar Sharif",
          state: "In Progress",
          type: "text"
        }
      ]
    };
  },
  methods: {}
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
</style>