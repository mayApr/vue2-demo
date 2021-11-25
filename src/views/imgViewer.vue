<template>
  <div class="imgViewer">
    <el-card :body-style="{ padding: '20px', minHeight: 'calc(100vh - 100px)' }">
      <!-- 使用：:images="[]",只能传入Array类型的数据 -->
      <viewer :images="images">
        <div class="imgList">
          <div class="imgItem" v-for="item in images" :key="item.id">
            <img :src="item" width="300" />
          </div>
        </div>
      </viewer>

      <div style="height:20px"></div>

      <!-- 使用：:trigger="{}",可以传入任何类型的数据 -->
      <viewer :trigger="imagesObj">
        <div class="imgList">
          <div class="imgItem" v-for="item in imagesObj" :key="item.id">
            <img :src="item" width="300" />
          </div>
        </div>
      </viewer>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "imgViewer",
  components: {},
  data() {
    return {
      images: [
        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg"
      ],
      imagesObj: {
        1: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg",
        2: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg"
      }
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.imgList {
  display: flex;
  .imgItem {
    margin-right: 20px;
  }
}
</style>
