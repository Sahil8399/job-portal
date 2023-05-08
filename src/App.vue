<template>
  <div class="container">
    <JobNavigation />
    <router-view />
  </div>
</template>

<script>
 import JobNavigation from './components/JobNavigation.vue'
//  import JobHome from './pages/JobHome.vue'
export default {
  name: 'App',
  components:{
    JobNavigation
  }
}
</script>

<style>

</style>
