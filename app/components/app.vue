<template>
  <div id="app">
    <router-view></router-view>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/test">Test</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="css">
  @import "../../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "../assets/styles/app.css";
</style>
