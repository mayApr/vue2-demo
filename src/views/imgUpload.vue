<template>
  <div class="imgUpload">
    <el-card :body-style="{ padding: '20px', minHeight: 'calc(100vh - 100px)' }">
      <el-form class="my-form" size="small" label-width="130px">
        <el-form-item label="上传单张图片：">
          <div class="imgItem">
            <imgUpload
              v-for="(item,index) in imgList"
              :key="index"
              :index="index"
              :img="item.imgDefalut"
              :name="item.name"
              :imageUrl="item.imgUrl"
              @handleAvatarSuccess="handleAvatarSuccess"
            ></imgUpload>
          </div>
        </el-form-item>
        <el-form-item label="上传多张图片：">
          <div class="imgList">
            <el-upload
              action
              :auto-upload="false"
              :file-list="imgMoreList"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <img src="@/assets/images/uploadImg.png" style="width:300px" />
            </el-upload>

            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { imgUpload } from "@/components/index";
export default {
  name: "imgUploadList",
  components: { imgUpload },
  data() {
    return {
      imgUrl: "",
      imgList: [
        {
          imgDefalut: "uploadImg6_1.png",
          keyWord: "idCard_1", //图片标识
          name: "图片1",
          imgUrl:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg"
        }
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      imgMoreList: []
    };
  },
  methods: {
    handleAvatarSuccess(index,raw) {
      this.imgList[index].imgUrl = raw;
      console.log("this.imgList[index].imgUrl", this.imgList[index].imgUrl);
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      console.log("this.dialogImageUrl", file);
      this.dialogVisible = true;
    }
  },
  created() {
    for (let i = 1; i < 6; i++) {
      this.imgList.push({
        imgDefalut: `uploadImg${i}.png`,
        name: `图片${i}`,
        imgUrl: ""
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.imgUpload {
  text-align: left;
}
::v-deep .el-upload--picture-card {
  border: none;
}
.imgList {
  margin: 15px 0;
  .imgItem {
    float: left;
    width: 300px;
    height: 180px;
    margin-right: 20px;
    margin-bottom: 20px;
    img {
      width: 300px;
      height: 180px;
      object-fit: cover;
      cursor: pointer;
    }
  }
}
.imgList ::v-deep .el-upload-list--picture-card .el-upload-list__item {
  width: 300px;
  height: 180px;
  margin: 0 20px 20px 0;
  object-fit: cover;
}
.imgList
  ::v-deep
  .el-upload-list--picture-card
  .el-upload-list__item-thumbnail {
  object-fit: cover;
}
</style>
