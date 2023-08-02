<template>
  <section class="edit-product">
    <p>edit</p>
    <div class="product-card" v-if="product">
      <img v-bind:src="product.img" alt="" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.coins }}</p>
      <p>{{ product.ostatok }}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null
    };
  },
  mounted() {
    fetch("http://localhost:3000/products/" + this.id)
    console.log(this.id)
    .then(res => res.json())
    .then(data => this.job = data)
    .catch(err => console.loc(err.message))
  }
};
</script>