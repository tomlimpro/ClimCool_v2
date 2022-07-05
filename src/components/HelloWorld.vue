<template>
  <div class="test">
  <nav_component></nav_component>
  <br>
  </div>
</template>

<script>
import nav_component from './nav-component/nav-component.vue'
export default {
  components: { nav_component },
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
