<template>
  <v-app dark>
    <Navbar></Navbar>
    <router-view></router-view>
   
    <v-footer center>
       <v-layout
        justify-center
        row
        wrap
      >
      <v-chip color='red lighten-4' outline>
      <v-icon>error</v-icon>
      Dėmesio - svetainė skirta naudoti tik sveikatos priežiūros specialistams.
      </v-chip>
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
