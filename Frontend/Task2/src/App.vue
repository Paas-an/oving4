<template>
  <div id="navbar"><NavigationBar></NavigationBar></div>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.router-view {
  flex: 1;
  width: 100%;
}
#app {
  padding: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px; /* Increase font size */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Add position: fixed; to make the navigation bar fixed at the top */
.NavigationBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

/* Increase size of all inputs */
input {
  font-size: 30px;
  padding: 10px;
  border: 2px solid #ccc;
}

button {
  font-size: 30px;
  padding: 10px;
}

</style>
