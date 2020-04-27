<template>
  <div>
    <el-dialog :visible="props.visible" :before-close="beforeClose" width="838px" center>
      <span slot="title">
        <div class="dialog-title">{{(props.mode=="add"?'Add New ':'Edit ')+'Car'}}</div>
      </span>
      <div class="dialog-body">
        <div
          class="dialog-description"
        >Fill the requried information to {{props.mode=="add"?'add new ':'edit'}} car</div>
        <div class="label">Brand and Model of the car</div>
        <el-input class="value" v-model="props.row.car_name" placeholder="Name of Car" />
        <div class="label">Car Image Banner (Size 4Mb Max)</div>

        <div class="mt-2">
          <label>
            <img
              ref="banner_image"
              class="edit-image"
              width="200"
              height="200"
              style="border:1px solid black;"
            />
            <input
              type="file"
              class="hidden"
              accept="image/png, image/jpg"
              name="img_file"
              @change="change_banner"
            />
            <span>Choose File</span>
          </label>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="label">Transmission</div>
            <el-select v-model="props.row.transmission" placeholder="Please Select" class="value">
              <el-option value="Manual">Manual</el-option>
              <el-option value="Automatic">Automatic</el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="label">Luggage number</div>
            <el-select v-model="props.row.luggage" placeholder="Please Select" class="value">
              <el-option value="2">2</el-option>
              <el-option value="4">4</el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="label">Doors number</div>
            <el-select v-model="props.row.doors" placeholder="Please Select" class="value">
              <el-option value="2">2</el-option>
              <el-option value="4">4</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="label">Passengers number</div>
            <el-select v-model="props.row.passengers" placeholder="Please Select" class="value">
              <el-option :value="2">2</el-option>
              <el-option :value="3">3</el-option>
              <el-option :value="4">4</el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="label">Conditioner</div>
            <el-select v-model="props.row.conditioner" placeholder="Please Select" class="value">
              <el-option value="Yes">Yes</el-option>
              <el-option value="No">No</el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <div class="label">Enter price for 1 day of rent</div>
            <el-input placeholder="Please Enter Price" v-model="props.row.day_price"></el-input>
          </el-col>
        </el-row>
      </div>
      <span slot="footer">
        <div class="dialog-footer">
          <el-button @click="saveRow()">
            <span>{{props.mode=='add'?'Add New ':'Save '}} Car</span>
          </el-button>
        </div>
      </span>
    </el-dialog>
    <EditSuccessDialog
      :props="success_dialog_props"
      @update:visible="val=>success_dialog_props.visible=val"
    />
  </div>
</template>

<script>
import EditSuccessDialog from "@/components/EditSuccessDialog";
export default {
  components: {
    EditSuccessDialog
  },
  data() {
    return {
      success_dialog_props: { visible: false, description: "" }
    };
  },
  props: ["props"],
  methods: {
    beforeClose(done) {
      this.$emit("update:visible", false);
      done();
    },
    goCategoryAll() {
      this.category_edit_success_dialog_visible = false;
      // this.$router.replace({name:'CategoryAll'});
    },
    change_banner(e) {
      const input = e.srcElement || e.target;
      if (input && input.files && input.files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.banner_image.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    saveRow() {
      this.props.visible = false;
      this.success_dialog_props.target = "Tesla Model S";
      this.success_dialog_props.description =
        " was " +
        (this.props.mode == "add" ? "added" : "saved") +
        " to the list of Rent cars";
      this.success_dialog_props.visible = true;
      // this.$refs.success_dialog.show();
    }
  }
};
</script>
<style lang="scss" scoped>
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
    // height: 55px;
    // padding: 17px;
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
</style>