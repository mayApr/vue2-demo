<template>
  <div class="formTime">
    <el-card :body-style="{ padding: '20px', minHeight: 'calc(100vh - 100px)' }">
      <el-form class="my-form" size="small" label-width="100px">
        <div class="timeDiv">
          <el-form-item label="选择时间：">
            <el-time-picker
              is-range
              v-model="form.time"
              format="HH:mm:ss"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              @change="selecTime()"
            ></el-time-picker>
          </el-form-item>

          <el-form-item label="选择日期：">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              @change="selectDate()"
            ></el-date-picker>（最大只能统计31天以内的数据）
          </el-form-item>

          <el-form-item label="选择日期：">
            <el-date-picker
              v-model="form.dateTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期"
              @change="selectDatetime()"
            ></el-date-picker>（生效时间至少要大于当前时间10分钟）
          </el-form-item>
          <div class="submitBtn">
            <el-button type="primary" size="mini" @click="submit">提交</el-button>
          </div>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "formTime",
  components: {},
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      form: {
        //设置默认时间段为9:00-18:00
        time: [
          new Date().getFullYear() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getDate() +
            " " +
            "09:00:00",
          new Date().getFullYear() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getDate() +
            " " +
            "18:00:00"
        ],
        date: ["", ""],
        dateTime: ""
      }
    };
  },
  methods: {
    selecTime() {
      console.log("this.time-起", this.form.time[0]);
      console.log("this.time-止", this.form.time[1]);
    },

    //判断选择的日期是否超过31天
    selectDate() {
      if (this.form.date == null || this.form.date[0] == "") {
        this.$message.error("请选择日期参数！");
        return false;
      } else {
        let startTime = new Date(this.form.date[0]).getTime();
        let endTime = new Date(this.form.date[1]).getTime();
        if (Number((endTime - startTime) / (3600 * 1000 * 24)) > 31) {
          this.$message.error(
            "最大只能统计31天以内的数据，请重新选择时间范围！"
          );
          return false;
        }
      }
    },

    //判断的生效时间是否大于当前时间10分钟
    selectDatetime() {
      //判断选择的生效时间是否大于当前时间10分钟
      if (this.form.dateTime != "") {
        let nowTime = Number(new Date().getTime());
        let effecTime = Number(new Date(this.form.dateTime).getTime());
        console.log("时间差", Number((effecTime - nowTime) / (60 * 1000)));
        if (Number((effecTime - nowTime) / (60 * 1000)) < 10) {
          this.$message.error("生效时间必须大于当前时间至少10分钟");
          return false;
        }
      } else {
        this.$message.warning("请选择生效时间");
      }
    },

    //提交参数
    submit() {
      /***
       * 选择时间-HH:mm:ss
       * 选择日期-yyyy-MM-dd
       * 选择日期-yyyy-MM-dd HH:mm:ss
       */
      let params = {
        time_min: this.globalJs.formatDate(this.form.time[0], "time"), //09:00:00
        time_max: this.globalJs.formatDate(this.form.time[1], "time"), //18:00:00
        date_min: this.form.date[0], //yyyy-MM-dd
        date_max: this.form.date[1], //yyyy-MM-dd
        dateTime: this.form.dateTime //yyyy-MM-dd HH:mm:ss
      };
      console.log("params", params);
    }
  },
  created() {
    //初始化统计周期为一个月-yyyy-MM-dd
    let date = new Date();
    let startTime = date.getTime() - 3600 * 1000 * 24 * 30;
    //2021-11-05起才有数据，如果一个月内的初始日期小于2021-11-05，则最小日期默认为2021-11-05
    if (startTime - new Date("2021-11-05 00:00:00").getTime() >= 0) {
      this.form.date[0] = this.globalJs.formatDate(startTime, "date");
    } else {
      this.form.date[0] = "2021-11-05";
    }
    this.form.date[1] = this.globalJs.formatDate(date, "date");

    //初始化时间为当前时间+30分钟--yyyy-MM-dd HH:mm:ss
    let startDateTime = date.setMinutes(date.getMinutes() + 30);
    this.form.dateTime = this.globalJs.formatDate(startDateTime, "dateTime");

    console.log(
      "this.time-起",
      this.globalJs.formatDate(this.form.time[0], "time")
    );
    console.log(
      "this.time-止",
      this.globalJs.formatDate(this.form.time[1], "time")
    );
  }
};
</script>
<style lang="scss" scoped>
.timeDiv {
  text-align: left;
}
.submitBtn{
  margin:50px 150px;
}
</style>
