<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth*20/375 + 'px';
window.onresize = function() {
    console.log(window.innerWidth);
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth*20/375 + 'px';
}
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
