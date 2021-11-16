<template>
  <!-- 微信风控提交页面 -->
  <div class="riskForm">
    <el-tabs type tab-position="top">
      <el-tab-pane label="企业信息"></el-tab-pane>
      <el-form
        class="my-form"
        size="small"
        label-width="180px"
        ref="riskForm"
        :model="riskForm"
        :rules="rules"
      >
        <el-form-item
          label="公司营业地址："
          prop="companyAddress"
          :rules="{required: true, message: '请输入公司营业地址', trigger: 'blur'}"
        >
          <el-input placeholder="请输入公司营业地址" v-model="riskForm.companyAddress"></el-input>
        </el-form-item>
        <el-form-item
          label="手机号码"
          :prop="phone"
          :ref="riskForm.phone"
          :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' },{ pattern: 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/, message: '手机号格式错误', trigger: 'blur' }]"
        >
          <el-input type="phone" placeholder="请输入手机号码" v-model="item.phone" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="法定代表人身份证号："
          prop="legalPersonCertCardId"
          :rules="{required: true, message: '法定代表人身份证号', trigger: 'blur'}"
        >
          <el-input placeholder="请输入法定代表人身份证号" v-model="riskForm.legalPersonCertCardId"></el-input>
        </el-form-item>
      </el-form>
    </el-tabs>
    <!-- 企业信息-end -->
    <!-- 业务模式-end -->
  </div>
</template>

<script>
import { PhotoUpload } from "@/components";
export default {
  name: "wBaseForm1",
  components: { PhotoUpload },
  computed: {},
  data() {
    return {
      rules: {},
      riskForm: {
        companyAddress: "", //公司营业地址
        legalPersonName: "", //法定代表人姓名
        legalPersonCertCardId: "" //法定代表人身份证号
      }
    };
  },
  watch: {},

  methods: {
    async getParam() {
      this.$refs.riskForm.validate(async valid => {
        if (valid) {
          //当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。
          let methosData = await this.getJson();
        }
      });
    },

    getJson() {
      return new Promise((resolve, reject) => {
        let tempJson = JSON.parse(JSON.stringify(this.riskForm));
        console.log("tempJson:", tempJson);
        resolve(tempJson);
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style  lang="scss" >
.el-time-panel__content::after,
.el-time-panel__content::before {
  margin-top: -7.5px;
}
</style>
<style scoped  lang="scss" >
.tips {
  line-height: 22px;
  margin-bottom: 20px;
  color: #8b8b8b;
  font-size: 14px;
}
</style>