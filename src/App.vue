<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>


<style>
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"),
    url(./assets/fonts/Gilroy-Regular.ttf);
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    list-style: none;
    text-decoration: none;
  }

  #app {
    font-family: sans-serif;
    color: #17233B;
  }
</style>
