<template>
  <!-- Steps 步骤条-组件 -->
  <div class="stepList">
    <div v-for="(item,index) in stepData" v-bind:key="index">
      <div
        :class="((step_state == 7 && index == 2) || (step_state == 4 && index == 3) ? 'stepItemError stepItem':(stepActive-1 > index ?'stepItemSuccess stepItem':(stepActive-1 == index ? 'stepItemActive stepItem':'stepItem')))"
      >
        <div class="stepRole stepName">{{item.role}}</div>
        <div class="stepIndex">
          <span
            v-if="!((step_state == 7 && index == 2) || (step_state == 4 && index == 3) ||((step_state == 3 || step_state == 4 || step_state == 6 )  && index == 2) || (step_state == 6 && index == 3) )"
          >{{index+1}}</span>
          <img
            src="./images/errorIco.png"
            v-if="(step_state == 7 && index == 2) || (step_state == 4 && index == 3)"
          />
          <img
            src="./images/successIco.png"
            v-if="((step_state == 3 || step_state == 4 || step_state == 6 ) && index == 2) || (step_state == 6 && index == 3)"
          />
        </div>
        <div class="stepStatus stepName">{{item.status}}</div>
      </div>
    </div>
    <div class="stepLine" :style="{width:(stepData.length-1)*160+'px'}"></div>
    <div
      class="stepActiveLine"
      :style="{width:stepActive > stepData.length ? (stepData.length-1)*160+'px':(stepActive-1)*160+'px'}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "formStep",
  props: {
    stepData: {
      type: Array
    },
    stepActive: {
      default: 1
    },
    step_state: {
      default: 1
    }
  },
  data() {
    return {};
  },
  watch: {},

  methods: {

  },
  created() {
    
  },
  mounted() {}
};
</script>

<style scoped lang="scss" >
.stepList {
  display: flex;
  position: relative;
  margin-bottom: 20px;
  .stepLine {
    height: 4px;
    width: 100%;
    background: #d7d7d7;
    position: absolute;
    top: 50%;
    margin: -2px 80px 0 80px;
  }
  .stepActiveLine {
    height: 4px;
    width: 100%;
    background: #017f5a;
    position: absolute;
    top: 50%;
    margin: -2px 80px 0 80px;
    z-index: 5;
  }
  .stepItem {
    width: 160px;
    position: relative;
    z-index: 10;
    .stepName {
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #8b8b8b;
    }
    .stepIndex {
      width: 37px;
      height: 37px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      background: #8b8b8b;
      border-radius: 50%;
      border: 5px solid #e8e8e8;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
}
.stepList .stepItemSuccess.stepItem .stepName {
  color: #181818;
}
.stepList .stepItemSuccess.stepItem .stepIndex {
  background: #017f5a;
  border: 5px solid #cce5de;
}
.stepList .stepItemActive.stepItem .stepName {
  color: #ff852b;
}
.stepList .stepItemActive.stepItem .stepIndex {
  background: #ff852b;
  border: 5px solid #ffe7d5;
}
.stepList .stepItemError.stepItem .stepName {
  color: #f00000;
}
.stepList .stepItemError.stepItem .stepIndex {
  background: #f00000;
  border: 5px solid #fccccc;
}
</style>