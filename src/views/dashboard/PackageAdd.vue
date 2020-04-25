<template>
  <div class="main-container">
    <div class="content-box">
      <div class="title pt-4">Add new package</div>
      <div class="detail mt-3">Fill the requried information to add new package</div>

      <div class="label mt-4">Package Name</div>
      <div class="mt-2">
        <input type="text" v-model="package_name" placeholder="Name of Package" class="w-100" />
      </div>

      <div class="label mt-4">Package Image Banner (Size 4Mb Max)</div>
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
      <div class="label mt-4">Package Descriptiopn</div>
      <div class="mt-2">
        <textarea
          type="text"
          v-model="description"
          placeholder="Write Package Descriptiopn"
          class="w-100"
          rows="5"
        ></textarea>
      </div>
      <div class="flex-container">
        <div style="flex:3;margin:.5em 1em;">
          <div class="label mt-4">Package Price</div>
          <div class="mt-2">
            <input type="text" placeholder="Write price here" v-model="price" class="w-100" />
          </div>
        </div>
        <div style="flex:2;margin:.5em 1em;">
          <div class="label mt-4">Package Category</div>
          <div class="mt-2">
            <select v-model="category" class="w-100" aria-placeholder="Please select...">
              <option>Please select...</option>
            </select>
          </div>
        </div>
        <div style="flex:2;margin:.5em 1em;">
          <div class="label mt-4">Trip Location</div>
          <div class="mt-2">
            <select v-model="location" class="w-100">
              <option>Please select...</option>
            </select>
          </div>
        </div>
      </div>
      <label
        @drop.prevent="dropFiles"
        @dragover.prevent
        class="photos-box flex-container flex-around inline-block"
      >
        <div class="center" style="width:150px;">
          <input
            type="file"
            multiple="true"
            accept="image/png, image/jpeg"
            class="hidden"
            @change="changePhotos"
          />
          <div>
            <img src="../../assets/images/ic-drop.svg" />
          </div>
          <div>Drag & Drop Files</div>
        </div>
        <div class="center" style="width:150px;">OR</div>
        <div class="btn el-button center" style="width:150px;">Choose File</div>
      </label>
      <el-progress :percentage="75" :show-text="false" color="#c7b299"></el-progress>
      <div class="progress-info flex-container flex-between">
        <div style="text-align:left;">5/8 images Uploading...</div>
        <div class="form-inline" style="text-align:right;">
          Cancel Upload
          <i class="el-dialog__close el-icon el-icon-close" @click="cancelUploading"></i>
        </div>
      </div>
      <div class="photos-preview flex-container flex-wrap">
        <div v-for="(photo,index) in photos" :key="index" class="pp flex-container">
          <img :src="photo" class="photo-image" />
          <img
            src="../../assets/images/ic-close-wb.svg"
            class="close-icon"
            @click="removePhoto(index)"
          />
        </div>
      </div>
      <div class="center mt-5 mb-5">
        <button class="btn-add" @click="add_package">Add Package Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerAdd",
  components: {},
  data() {
    return {
      package_name: "Johan Mark",
      banner: "",
      description: "",
      price: "",
      category: "",
      location: "",
      photos: []
    };
  },
  methods: {
    add_package() {
      if (!this.package_name) {
        this.$alert("Please Enter name");
        return;
      }
      this.$router.replace({ name: "PackageAddSuccess" });
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
    changePhotos(e) {
      const input = e.srcElement || e.target;
      if (input && input.files && input.files.length > 0) {
        const photos = this.photos;
        for (let i = 0; i < input.files.length; i++) {
          const reader = new FileReader();
          reader.onload = function(e) {
            photos.push(e.target.result);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    },
    dropFiles(e) {
      console.log(e);
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      const photos = this.photos;
      [...droppedFiles].forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          photos.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    cancelUploading() {
      this.$confirm("Cancel Uploading?")
        .then(() => {
          console.log("canceled");
        })
        .catch(() => {
          console.log("continue");
        });
    },
    removePhoto(index) {
      if (index < this.photos.length) {
        this.photos.splice(index, 1);
      }
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
      padding: 10px 107px;
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
      input:not([type="file"]),
      textarea,
      select {
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
      .photos-box {
        height: 130px;
        background: rgba(199, 178, 153, 0.0898164);
        border: 1px dashed rgba(80, 71, 60, 0.256419);
        box-sizing: border-box;
        div {
          margin: auto;
        }
      }
      .progress-info {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;

        color: #50473c;
      }
      .photos-preview {
        div {
          margin-right: 16px;
          margin-bottom: 16px;
          width: 90px;
          height: 90px;
          .photo-image {
            width: 90px;
            height: 90px;
          }
          .close-icon {
            width: 32px;
            height: 32px;
            margin-left: -32px;
            display: none;
          }
        }
        .pp:hover {
          .close-icon {
            display: block;
          }
        }
      }
      button.btn-add {
        width: 315px;
        height: 50px;
        color: #50473c;
        font-weight: bold;
        background-color: #ffc11f;
        border: 1px solid transparent;
        border-radius: 5px;
      }
      button.btn-add:hover,
      button.btn-add:active {
        border: 1px solid grey;
      }
    }
  }
</style>
