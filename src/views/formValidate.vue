<template>
  <!-- form表单校验页面 -->
  <div class="form">
    <el-card :body-style="{ padding: '20px', minHeight: 'calc(100vh - 100px)' }">
      <el-tabs type="border-card" tab-position="top">
        <!-- 静态表单校验-end -->
        <el-tab-pane label="静态表单校验">
          <div style="width:600px">
            <el-form
              class="my-form"
              size="small"
              label-width="180px"
              ref="form"
              :model="form"
              :rules="rules"
            >
              <el-form-item label="公司营业地址：" prop="companyAddress" :rules="rules.companyAddress">
                <el-input placeholder="请输入公司营业地址" v-model="form.companyAddress" clearable></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="phone" :rules="rules.phone">
                <el-input
                  type="phone"
                  placeholder="请输入手机号码"
                  v-model="form.phone"
                  clearable
                  maxlength="11"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="submitBtn">
            <el-button type="primary" size="mini" @click="submitBtn">提交</el-button>
          </div>
        </el-tab-pane>
        <!-- 静态表单校验-end -->

        <!-- 动态表单校验-end -->
        <el-tab-pane label="动态表单校验">
          <div style="width:600px">
            <el-form
              class="my-form"
              size="small"
              label-width="180px"
              ref="applyForm"
              :model="applyForm"
              :rules="rules"
            >
              <div
                class="applyBaseForm"
                v-for="(item,index) in applyForm.applyFormData"
                v-bind:key="index"
              >
                <el-form-item
                  label="姓名"
                  :prop="'applyFormData.' + index +'.name'"
                  :rules="rules.name"
                >
                  <el-input placeholder="请输入姓名" v-model="item.name" clearable></el-input>
                </el-form-item>

                <el-form-item
                  label="手机号码"
                  :prop="'applyFormData.' + index +'.phone'"
                  :rules="rules.phone"
                >
                  <el-input
                    type="phone"
                    placeholder="请输入手机号码"
                    v-model="item.phone"
                    clearable
                    maxlength="11"
                  ></el-input>
                </el-form-item>
                <div class="deleteBtn">
                  <el-button
                    type="danger"
                    size="mini"
                    @click="deleteApplyBaseData(index)"
                    v-if="applyForm.applyFormData.length > 1"
                  >删除</el-button>
                </div>
              </div>
              <!-- 新增 -->
              <div
                class="addBtn"
                :style="{'margin-top':(applyForm.applyFormData.length < 2 ? '0px' : '-48px')}"
              >
                <el-button type="success" size="mini" @click="addApplyBaseData">新增</el-button>
              </div>
            </el-form>
          </div>
          <div class="submitBtn">
            <el-button type="primary" size="mini" @click="submitMoreBtn">提交</el-button>
          </div>
        </el-tab-pane>
        <!-- 动态表单校验-end -->
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "formValidate",
  components: {},
  computed: {},
  data() {
    return {
      rules: {
        companyAddress: {
          required: true,
          message: "请输入公司营业地址",
          trigger: "blur"
        },
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            pattern: 11 && /^(1[3-9](\d){9})$/,
            message: "手机号格式错误",
            trigger: "blur"
          }
        ],
        name: { required: true, message: "请输入姓名", trigger: "blur" }
      },
      //静态表单
      form: {
        companyAddress: "", //公司营业地址
        phone: "" //手机号码
      },
      //动态表单
      applyForm: {
        applyFormData: [
          {
            name: "", //姓名
            phone: "" //手机号码
          }
        ]
      }
    };
  },
  watch: {},

  methods: {
    //增加报名用户信息
    addApplyBaseData() {
      let cope = {
        name: "",
        phone: ""
      };
      this.applyForm.applyFormData.push(cope);
    },

    //删除报名用户信息
    deleteApplyBaseData(index) {
      this.applyForm.applyFormData.splice(index, 1);
    },

    getMoreJson() {
      return new Promise((resolve, reject) => {
        let tempJson = JSON.parse(JSON.stringify(this.applyForm.applyFormData));
        console.log("tempJson:", tempJson);
        tempJson.map(item => {
          delete item.rules;
          return item;
        });
        resolve(tempJson);
      });
    },

    //动态表单校验-提交
    async submitMoreBtn() {
      this.$refs.applyForm.validate(async valid => {
        if (valid) {
          //通过表单校验
          let formData = await this.getMoreJson();
        }
      });
    },

    //静态表单校验-提交
    async submitBtn() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          //通过表单校验
          let methosData = await this.getJson();
        }
      });
    },
    getJson() {
      return new Promise((resolve, reject) => {
        let tempJson = JSON.parse(JSON.stringify(this.form));
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
.deleteBtn {
  margin-left: 150px;
  margin-bottom: 20px;
}
</style>