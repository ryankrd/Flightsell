<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <img width="15%" alt="Plane logo" src="../assets/plane.png">
    <Formplane class="mt-3" msg="Flightsell - vente de billets"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formplane from '@/components/Formplane.vue'

export default {
  name: 'HomeView',
  components: {
    Formplane
  }
}
</script>
