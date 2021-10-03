<template>
  <div class="home">
    <TimeMap docId="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6AquASDUv_4AsotubJ4gchyrEGKuk8ZAeANJFOrvE4OToeW0tgFhXTQtsAfccU1UyV6d8a200LfCb/pubhtml"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeMap from '@/components/TimeMap.vue'

export default {
  name: 'Home',
  components: {
    TimeMap
  }
}
</script>

<style>
  .home {
    height: 100%;
  }
</style>
