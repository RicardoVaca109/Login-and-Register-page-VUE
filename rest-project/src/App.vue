<template>

  <router-view/>

</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
    width: 250px
}

.register input, .login input {
    width: 300px;
    height: 20px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button, .login button {
    width: 320px;
    height: 20px;
    border: 1px solid darkolivegreen;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
