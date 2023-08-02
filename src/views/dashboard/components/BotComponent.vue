<template>
  <section class="bot">
    <div class="bot-heading">
      <div class="heading-left">
        <div><img src="../../../assets/ellipse.png" alt="" /></div>
        <h1>Mars Bot</h1>
      </div>
      <div class="heading-right">
        <el-button @click="addBtnClick()">+ Add</el-button>
      </div>
    </div>
    <div class="bot-cards">
      <div class="bot-card" v-for="item in items" v-bind:key="item.id" >
        <div class="card-date">
          <p class="card-bold">{{ item.time }}</p>
          <p class="card-reg">{{ item.date }}</p>
        </div>
        <div class="card-title">
          <p class="card-bold">{{ item.title }}</p>
          <div class="loc">
            <div><img src="../../../assets/loc.png" alt="" /></div>
            <p>{{ item.location }}</p>
          </div>
        </div>
        <div class="card-right">
          <p class="right-date">{{ item.eventDate }}</p>

          <el-button type="default" :icon="Edit"  @click="botDetailsClick()" />
          <el-button type="default" :icon="Delete" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElButton } from "element-plus"; // ElButton ni import qo'shing
import { Edit, Delete } from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    ElButton, // ElButton komponentini componentlarga qo'shing
  },
  emits: ['marsBotAdd', 'marsBotDetail'],
  setup(_, { emit }) {
    const items = ref([]);

    function theData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          items.value = actualData;
        })
        .catch((e) => {
          console.error("Error: ", e);
        });
    }

    const addBtnClick = () => {
      emit('marsBotAdd')
    }

    const botDetailsClick = (index) => {
      emit('marsBotDetail')
      const item = items.value[index];
      console.log("Index:", index);
      console.log("Item:", item);
    }

    theData("http://localhost:3000/bot");

    return {
      Edit, Delete, addBtnClick, items, botDetailsClick
    }
  },
});
</script>

<style>
.bot-heading {
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}

.heading-right .el-button {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  margin: 5px;
  border-radius: 7px;
  color: #17233b;
  font-weight: 700;
}

.heading-right .el-button:hover {
  background-color: #17233B;
  color: #fff;
}

.heading-left {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
}

.bot-cards {
  
  overflow-y: auto;
  max-height: 245px;
  padding: 21px 0;
}


.bot-cards::-webkit-scrollbar {
  width: 5px;
  background: #e8e8e8;
  border-radius: 30px;
  max-height: 200px;
}

.bot-cards::-webkit-scrollbar-button {
}

.bot-cards::-webkit-scrollbar-thumb {
  width: 100%;
  background: #e3391b;
  border-radius: 30px;
}


.bot-card {
  width: 99.5%;
  display: flex;
  justify-content: space-between;
  border-left: 7px solid #e3391b;
  padding: 6px 19px 9px;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 21px;
}

.bot-card:last-child {
  margin-bottom: unset;
}

.bot-card:hover {
  background-color: #E3391B;
  color: #fff;
}

.bot-card:active {
  background-color: #E3391B;
  color: #fff;
}

.bot-card .el-button {
  border: none;
  color: #e3391b;
  background-color: none;
}

.bot-card .el-button:nth-child(3) {
  color: #898282;
}

.bot-card .el-button:hover {
  background-color: #e3391b;
  color: #fff;
}

.card-date {
  border-right: 1px solid #d9d9d9;
  padding-right: 22px;
}

.card-bold {
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
}

.card-reg {
  font-size: 12px;
  font-family: Gilroy;
  font-weight: 400;
  margin-top: 6px;
}

.card-title {
  width: 100px;
}

.loc p {
  font-size: 8px;
  font-family: Gilroy;
  font-weight: 400;
  margin-top: 6px;
}

.loc {
  display: flex;
  align-items: center;
  margin-top: 11px;
}

.card-right {
  display: flex;
  align-items: center;
}

.right-date {
  font-size: 16px;
  font-family: Gilroy;
  font-weight: 400;
  padding-right: 37px;
}

.card-right el-buuton {
  padding-right: 26px;
}
</style>