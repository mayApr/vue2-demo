<template>
  <div class="step">
    <el-card :body-style="{ padding: '20px', minHeight: 'calc(100vh - 100px)' }">
      <!-- 常规进度条-start -->
      <formStep :stepData="stepData" :stepActive="stepActive"></formStep>
      <!-- 常规进度条-end -->

      <!-- 根据状态来改变的进度条-start -->
      <pageStep :stepData="pageStepData" :stepActive="pageStepActive" :step_state="step_state"></pageStep>
      <!-- 根据状态来改变的进度条-end -->
    </el-card>
  </div>
</template>

<script>
import { formStep, pageStep } from "@/components/index";
export default {
  name: "step",
  components: {
    formStep,
    pageStep
  },
  data() {
    return {
      //常规进度条
      stepActive: 1, //当前进度
      stepData: [
        {
          status: "基本信息"
        },
        {
          status: "补充订单信息"
        },
        {
          status: "确认提交"
        }
      ],
      //根据状态来改变的进度条
      pageStepActive: 1,
      step_state: 1,
      pageStepData: [
        {
          role: "风控方",
          status: "商户风控"
        },
        {
          role: "商户/客户经理",
          status: "提交申诉材料"
        },
        {
          role: "客服",
          status: "审核"
        },
        {
          role: "风控方",
          status: "审核"
        },
        {
          role: "风控方",
          status: "审核通过"
        }
      ]
    };
  },
  methods: {
    setStepStatus() {
      //判断当前的状态
      //1：未提交，2：待审核，3：审核中:4：风控方驳回，5：已过期，6：申诉成功，7：客服驳回
      this.step_state = 4;
      this.pageStepData = [
        {
          role: "风控方",
          status: "商户风控"
        },
        {
          role: "商户/客户经理",
          status: "提交申诉材料"
        },
        {
          role: "客服",
          status: "审核"
        },
        {
          role: "风控方",
          status: "审核"
        },
        {
          role: "风控方",
          status: "审核通过"
        }
      ];
      if (this.step_state == 1 || this.step_state == 5) {
        //未提交
        this.pageStepActive = 2;
        this.pageStepData[2].status = "审核";
      } else if (this.step_state == 2) {
        //待审核
        this.pageStepActive = 3;
        this.pageStepData[2].status = "审核";
      } else if (this.step_state == 3) {
        //审核中
        this.pageStepActive = 4;
        this.pageStepData[2].status = "审核通过";
      } else if (this.step_state == 4) {
        //风控方驳回
        this.pageStepActive = 5;
        this.pageStepData = [
          {
            role: "风控方",
            status: "商户风控"
          },
          {
            role: "商户/客户经理",
            status: "提交申诉材料"
          },
          {
            role: "客服",
            status: "审核通过"
          },
          {
            role: "风控方",
            status: "审核驳回"
          },
          {
            role: "商户/客户经理",
            status: "提交申诉材料"
          },
          {
            role: "客服",
            status: "审核"
          },
          {
            role: "风控方",
            status: "审核"
          },
          {
            role: "风控方",
            status: "审核通过"
          }
        ];
      } else if (this.step_state == 6) {
        //申诉成功
        this.pageStepActive = 7;
        // this.stepData[2].status = "审核通过";
        this.stepData = [
          {
            role: "风控方",
            status: "商户风控"
          },
          {
            role: "商户/客户经理",
            status: "提交申诉材料"
          },
          {
            role: "客服",
            status: "审核通过"
          },
          {
            role: "风控方",
            status: "审核通过"
          }
        ];
      } else if (this.step_state == 7) {
        //客服驳回
        this.pageStepActive = 4;
        this.pageStepData = [
          {
            role: "风控方",
            status: "商户风控"
          },
          {
            role: "商户/客户经理",
            status: "提交申诉材料"
          },
          {
            role: "客服",
            status: "审核驳回"
          },
          {
            role: "商户/客户经理",
            status: "提交申诉材料"
          },
          {
            role: "客服",
            status: "审核"
          },
          {
            role: "风控方",
            status: "审核"
          },
          {
            role: "风控方",
            status: "审核通过"
          }
        ];
      }
    }
  },
  created() {
    this.setStepStatus();
  }
};
</script>
