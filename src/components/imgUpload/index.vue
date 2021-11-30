<template>
  <!-- 单张图片上传组件 -->
  <section
    :style="{
			width: width,
			height: height,
			display: 'inline-block',
			marginRight: '20px',
      marginBottom: '20px',
		}"
  >
    <el-upload
      :style="{ width: width, height: height }"
      class="avatar-uploader"
      action
      :show-file-list="false"
      :auto-upload="false"
      list-type="picture-card"
      :on-change="handleAvatarSuccess"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :width="width"
        :height="height"
        style="object-fit: cover;"
      />
      <img
        v-else
        :src="require('./image/' + img)"
        :width="width"
        :height="height"
        style="border-radius: 5px"
      />
    </el-upload>
    <b
      class="text-info2"
      style="text-align: center; display: block"
      v-if="name != ''"
    >点击上传{{ name }}</b>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    index: {
      type: Number
    },
    name: {
      type: String
    },
    img: {
      type: String
    },
    imageUrl: {
      type: String
    },
    width: {
      default: "300px"
    },
    height: {
      default: "180px"
    },
    // 图片类型
    KeyWord: {
      type: String,
      default: ""
    }
  },
  computed: {},
  created() {},
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imgData: {}
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      let url = URL.createObjectURL(res.raw);
      this.$emit(
        "handleAvatarSuccess",
        this.index,
        url
      );

    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 < 2;
      // if (!isJPG) {
      // 	this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .el-upload {
  border: none;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 180px;
  line-height: 178px;
  text-align: center;
  border: "1px solid #DCDFE6";
}
</style>