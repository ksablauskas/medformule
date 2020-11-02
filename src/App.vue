<template>
  <v-app dark>
    <Navbar></Navbar>
    <router-view></router-view>
   
    <v-footer center>
       <v-layout
        justify-center
        row
        wrap
        px-4
      >
      <p >Dėmesio - svetainė skirta naudoti tik sveikatos priežiūros specialistams.</p>
       </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
