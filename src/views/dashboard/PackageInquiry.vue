<template>
  <div class="package-inquiry main-container">
    <div class="content-box">
      <div class="title pt-4">Package Inquiry</div>
      <div class="detail mt-3">The list of special book enquiries</div>
      <el-table :data="tableData" class="mt-3">
        <el-table-column prop="sno" label="S.No." width="60"></el-table-column>
        <el-table-column prop="tour_date" label="Tour Date"></el-table-column>
        <el-table-column prop="destinations" label="Destinations"></el-table-column>
        <el-table-column prop="pno" label="No. of People"></el-table-column>
        <el-table-column prop="transportation" label="Transportation"></el-table-column>
        <el-table-column prop="accomodation" label="Accomodation"></el-table-column>
        <el-table-column prop="price" label="Price" width="100"></el-table-column>
        <el-table-column prop="message" label="Message" width="300"></el-table-column>
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
          sno: "01",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "02",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "03",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "04",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "05",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "06",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "07",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "08",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
        },
        {
          sno: "09",
          tour_date: "24-12-2019",
          destinations: " Petra, Dead Sea",
          pno: "03",
          transportation: "Val",
          accomodation: "5-Star",
          price: "$450",
          message:
            "Aplanned visit to several places in acountry or area made for a special purpose"
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
</style>