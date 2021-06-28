<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  beforeCreate() {
    console.log('HELLO APP')
  }
}
</script>
