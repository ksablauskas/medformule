<template>
    <v-layout
      text-xs-center
      row wrap
      justify-center
      my-2
    >
    <v-flex xs6 md3>
    <v-card color="indigo">
      <v-card-title>
        <span class="title font-weight-light">SERUMO KREATININAS</span>
      </v-card-title>
      
    </v-card>
    </v-flex>
    <v-flex xs1>
    </v-flex>

    
      <v-flex xs3 md2>
        <v-text-field
          label="(μmol/l)"
          clearable
          type="number"
          min="0"
          >
        </v-text-field>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ['numberdata'],
  data() {
    return {

    }
  },
  methods: {
   
  },
  computed: {

  },

}
</script>

<style>

</style>