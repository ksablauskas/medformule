<template>
  <v-app dark>
    <Navbar></Navbar>
    <router-view></router-view>
   
    <v-footer height="auto" center>
    <v-layout px-4 py-2>
    <p>Dėmesio - svetainė skirta naudoti tik sveikatos priežiūros specialistams.</p>
    
    </v-layout>
    <v-layout px-4 py-2>
    <p>&copy;2020 <strong><a href="https://www.covidmed.lt/">IPMED</a></strong></p>
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
