<template>
  <div v-bind:class="'container'">
    <div v-bind:class="'card'">
      <div v-bind:class="'card-left'">
        <img src="../../../assets/mars-logo.24e25048.png" alt="" />
        <h1 class="text-green-700 text-xl">Welcome back 👋</h1>
        <form action="">
          <label for="">Phone number</label>
          <input type="text" />
          <label for="">Password</label>
          <input type="text" />
          <button>
            <router-link to="/main/">Sign in</router-link>
          </button>
        </form>
        
      </div>
      <div v-bind:class="'card-right'">
        <img src="../../../assets/austronaut.43cae203.png" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #16233c;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 850px;
  height: 500px;
  background-color: #fff;
  border-radius: 30px;
}

.card-left {
    text-align: center;
    width: 50%;
}

.card-left form {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 40%;
}

.card-left form input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #16233c;
    margin: 10px 0;
}

.card-left form label {
    align-self: flex-start;
}

.card-left form button {
    padding: 10px;
    background: linear-gradient(270deg,#e33d0e,#ff7d58 101.34%);
    border: none;
    color: #fff;
    border-radius: 10px;
    margin-top: 30px;
    width: 100%;
    cursor: pointer;
}
.card-left h1 {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    margin: 0 100px;
    font-size: 23px;
}

.card-left img {
  width: 146px;
}

.card-right img {
width: 95%;
}
</style>