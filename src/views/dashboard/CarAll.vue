<template>
  <div class="car-all main-container">
    <div class="content-box">
      <div class="title pt-4">View All CARs</div>
      <el-table :data="tableData" class="mt-3">
        <el-table-column label="Car" width="200">
          <template slot-scope="scope">
            <img :src="getImgUrl(scope.row.img_name)" />
            &nbsp;
            <span>{{scope.row.car_name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="day_price" label="1 day price" width="110" align="center"></el-table-column>
        <el-table-column prop="transmission" label="Transmission" width="120"></el-table-column>
        <el-table-column prop="luggage" label="Luggage" width="120" align="center"></el-table-column>
        <el-table-column prop="doors" label="Doors" width="100" align="center"></el-table-column>
        <el-table-column prop="passengers" label="Passengers" width="110" align="center"></el-table-column>
        <el-table-column prop="conditioner" label="Conditioner" align="center"></el-table-column>
        <el-table-column label="Edit" align="center">
          <template slot-scope="scope">
            <img src="../../assets/images/ic-edit-black.svg" @click="showEditDialog(scope.row)" />
          </template>
        </el-table-column>
      </el-table>

      <div class="form-inline flex-container flex-center">
        <el-button class="more-button" @click="showAddDialog">Add New Car</el-button>
        <el-button class="more-button">Load more</el-button>
      </div>
    </div>
    <CarEditDialog :props="edit_dialog_props" @update:visible="val=>edit_dialog_props.visible=val" />
  </div>
</template>

<script>
import CarEditDialog from "@/components/CarEditDialog";
export default {
  components: {
    CarEditDialog
  },
  data() {
    return {
      edit_dialog_props:{
        visible:false,
        mode:'add',
        row:{}
      },
      tableData: [
        {
          img_name: "car-bmw.png",
          car_name: "BMW",
          day_price: "$118",
          transmission: "Manual",
          luggage: "4",
          doors: "4",
          passengers: "4",
          conditioner: "Yes"
        },
        {
          img_name: "car-hyundai.png",
          car_name: "Hyundai Elantra",
          day_price: "$118",
          transmission: "Automatic",
          luggage: "2",
          doors: "4",
          passengers: "4",
          conditioner: "No"
        },
        {
          img_name: "car-toyoda.png",
          car_name: "Toyota Prius",
          day_price: "$118",
          transmission: "Manual",
          luggage: "4",
          doors: "4",
          passengers: "4",
          conditioner: "Yes"
        },
        {
          img_name: "car-bmw.png",
          car_name: "BMW",
          day_price: "$118",
          transmission: "Manual",
          luggage: "2",
          doors: "4",
          passengers: "4",
          conditioner: "Yes"
        },
        {
          img_name: "car-hyundai.png",
          car_name: "Hyundai Elantra",
          day_price: "$118",
          transmission: "Automatic",
          luggage: "2",
          doors: "4",
          passengers: "4",
          conditioner: "No"
        },
        {
          img_name: "car-toyoda.png",
          car_name: "Toyota Prius",
          day_price: "$118",
          transmission: "Manual",
          luggage: "4",
          doors: "4",
          passengers: "4",
          conditioner: "Yes"
        },
        {
          img_name: "car-bmw.png",
          car_name: "BMW",
          day_price: "$118",
          transmission: "Automatic",
          luggage: "2",
          doors: "4",
          passengers: "4",
          conditioner: "No"
        },
        {
          img_name: "car-hyundai.png",
          car_name: "Hyundai Elantra",
          day_price: "$118",
          transmission: "Automatic",
          luggage: "4",
          doors: "4",
          passengers: "4",
          conditioner: "No"
        },
        {
          img_name: "car-toyoda.png",
          car_name: "Toyota Prius",
          day_price: "$118",
          transmission: "Manual",
          luggage: "2",
          doors: "4",
          passengers: "4",
          conditioner: "Yes"
        }
      ]
    };
  },
  methods: {
    getImgUrl(fn) {
      //   var images = require.context("../assets/images/", false, /\.png$/);
      //   return images("./" + pet + ".png");
      return require("../../assets/images/" + fn);
    },
    showEditDialog(row) {
      this.edit_dialog_props.mode="edit";
      this.edit_dialog_props.row =JSON.parse(JSON.stringify(row));
      this.edit_dialog_props.visible = true;
    },
    showAddDialog() {
      this.edit_dialog_props.mode="add";
      this.edit_dialog_props.row ={};
      this.edit_dialog_props.visible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  background-color: #f2f2f2;
  flex: 1;
  padding: 43px 48px 45px 48px;
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