<template>
    <v-layout
      text-xs-center
      row wrap
      justify-left
    >
      <v-flex xs6 md2 mx-1 px-1 v-for="option in options"
            :key="option.id">
          <v-btn large 
            @click="setActive(option.id)"
            :color="option.color"
            block
            >
              {{ option.name }}
          </v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ['options'],
  data() {
    return {

    }
  },
  methods: {
    setActive: function(activeId){
        this.options.forEach( (option, index) => {
          if (option.id != activeId){
            option.active = false
            option.color = ''
          } else {
            option.active = true
            option.color = 'warning'
          }
        });
    }
  },
  computed: {

  },
  created() {
    this.options.forEach( (option, index) => {
        if (option.active){
          option.color = 'warning'
        } else { 
          option.color = ''         
        }
      });
  }
}
</script>

<style>

</style>