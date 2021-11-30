<template>
  <div class="home">
    <el-card :body-style="{ padding: '20px', minHeight: 'calc(100vh - 100px)' }">
      <div class="title">vue2.x-element ui案例合集</div>
      <div class="demoList">
        <div class="demoItem" v-for="item in demoData" :key="item.id" @click="goLink(item.id)">
          <el-button>{{item.name}}</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      demoData: [
        {
          id: 1,
          name: "step步骤条"
        },
        {
          id: 2,
          name: "form表单校验"
        },
        {
          id: 3,
          name: "时间选择控件"
        },
        {
          id: 4,
          name: "图片放大预览"
        },
        {
          id: 5,
          name: "图片上传"
        }
      ]
    };
  },
  methods: {
    goLink(id) {
      let routesName = "";
      if (id == 1) {
        routesName = "/step";
      } else if (id == 2) {
        routesName = "/formValidate";
      } else if (id == 3) {
        routesName = "/formTime";
      }else if (id == 4) {
        routesName = "/imgViewer";
      }else if (id == 5) {
        routesName = "/imgUpload";
      }
      let routes = this.$router.resolve({
        path: routesName,
        query: {}
      });
      window.open(routes.href, "_blank");
    }
  }
};
</script>
<style scoped lang="scss">
.home {
  .title {
    font-size: 20px;
    text-align: center;
  }
  .demoList {
    margin-top: 50px;
    .demoItem {
      font-size: 16px;
      margin: 0 20px 20px 0;
      float: left;
    }
  }
}
</style>
