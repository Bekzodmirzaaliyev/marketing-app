<template>
  <section class="products-section">
    <div class="products">
      <div class="products-header">
        <h1>Products</h1>
      </div>
      <div class="cards">
        <div class="card" v-for="product in products" v-bind:key="product.id">
          <div class="card-img">
            <img v-bind:src="product.img" alt="" />
          </div>
          <div class="card-text">
            <h2>{{ product.name }}</h2>

            <div class="coins">
              <img src="../../../assets/coin.svg" alt="" />
              <p>{{ product.coins }} Coins</p>
            </div>
          </div>
          <div class="card-btns">
            <img src="../../../assets/edit.png" alt="" />
            <p>{{ product.ostatok }} остаток</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <p>Yangi Maxsulot qo'shish</p>
      <el-button @click="addProductBtnClick()">+ Add</el-button>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["addProduct"],
  setup(_, { emit }) {
    const products = ref({ activity: "" });

    function theData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          products.value = actualData;
        })
        .catch((e) => {
          console.error("Error: ", e);
        });

      return products;
    }

    const addProductBtnClick = () => {
      emit("addProduct");
    };

    theData("http://localhost:3000/products");

    return {
      products,
      addProductBtnClick,
    };
  },
};
</script>

<style scoped>
.products-section {
  max-width: 50%;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.products {
  width: 100%;
  padding: 11px 0 11px 24px;
  border: 0.5px #a5a9bc solid;
  border-radius: 10px 10px 0 0;
  height: 514px;
  overflow: hidden;
}

.products h1 {
  color: #17233b;
  font-size: 30px;
  font-family: Inter;
  font-weight: 500;
  padding: 10px;
  max-height: 50px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.products::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.cards {
  padding-right: 24px;
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 18px;
}

.cards::-webkit-scrollbar {
  width: 5px;
  max-height: 33px;
  background: #e8e8e8;
  border-radius: 30px;
  transform: translate(-50px);
}

.cards::-webkit-scrollbar-button {
  display: none;
}

.cards::-webkit-scrollbar-thumb {
  background: #e3391b;
  border-radius: 30px;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
}

.card-img img {
  width: 84px;
  border-radius: 20px;
  border: 0.4px solid #c6cad3;
}

.card-text {
  width: 150px;
}

.card-text h2 {
  font-size: 18px;
  padding-bottom: 18px;
}

.coins {
  display: flex;
  align-items: center;
  gap: 1px;
}

.card-text p {
  font-size: 14px;
}

.card-btns {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.card-btns p {
  font-size: 8px;
  padding-top: 24px;
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