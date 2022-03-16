<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app-header.vue';
export default{
  components:{
    appHeader
  }
}
</script>

<template>
  <app-header></app-header>

  <RouterView />
</template>

<style>

</style>
