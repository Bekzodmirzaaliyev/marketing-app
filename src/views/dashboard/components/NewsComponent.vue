<template>
  <section class="news-section">
    <div class="news">
      <h1>News</h1>
      <div class="news-cards">
        <div class="news-card">
          <a href="#"><img src="../../../assets/news1.png" alt="" /></a>
        </div>
        <div class="news-card">
          <a href="#"><img src="../../../assets/news1.png" alt="" /></a>
        </div>
        <div class="news-card">
          <a href="#"><img src="../../../assets/news1.png" alt="" /></a>
        </div>
        <div class="news-card">
          <a href="#"><img src="../../../assets/news1.png" alt="" /></a>
        </div>
        <div class="news-card">
          <a href="#"><img src="../../../assets/news1.png" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <p>Yangi Maxsulot qo'shish</p>
      <el-button @click="addNewsComponent()">+ Add</el-button>
    </div>
  </section>
</template>
<script>
    export default {
      emits: ['addNewsComponent'],
        setup(_, { emit }) {
          const addNewsComponent = () => {
            emit("addNewsComponent");
          };
          return {
            addNewsComponent
          }
        }
      }

</script>

<style>
.news-section {
  width: 50%;
}
.news {
  width: 100%;
  padding: 21px 0 21px 24px;
  border: 0.5px #a5a9bc solid;
  border-radius: 10px 10px 0 0;
  height: 514px;
  overflow-y: scroll;
}

.news-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 21px 30px ;
}

.news {
  overflow: hidden;
  position: relative;
}

.news-cards {
  height: 100%;
  overflow-y: initial;
}

.news-cards::-webkit-scrollbar {
  width: 5px;
  background: #e8e8e8;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: -10px;
}

.news-cards::-webkit-scrollbar-button {
  display: block;
}

.news-cards::-webkit-scrollbar-thumb {
  width: 100%;
  background: #e3391b;
  border-radius: 30px;
}
.news img {
  width: 100%;
  height: 100%;
}
.news h1 {
  color: #17233b;
  font-size: 30px;
  font-family: Inter;
  font-weight: 500;
  margin-bottom: 25px;
}

.news-card {
  width: 100%;
  height: 100px;
  margin: 15px 0;
  overflow: initial;
}
.card-footer {
  background-color: #e3391b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px;
  margin-bottom: 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
}

.card-footer p {
  color: #fff;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 500;
}

.card-footer .el-button {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  margin: 5px;
  border-radius: 7px;
  color: #17233b;
}
</style>