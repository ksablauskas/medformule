<template>
    <v-container>
        <v-layout
            row wrap
            justify-center
            mt-2
        >

            <span class="title">{{resultitle}}</span>

        </v-layout>

         <v-layout
            row wrap
            justify-center
            mb-2
        >
            <span class="caption">{{units}}</span>

        </v-layout>

        <v-layout
            row wrap
            justify-center
            my-2
        >

            <v-flex xs4 md2 center py-4 px-2 :class="`${resultcolor} text-xs-center`">
                <span class="headline font-weight-bold">{{resultvalue}}</span>
            </v-flex>
            
        </v-layout>

        <v-layout
            row wrap
            justify-center
            my-2
        >

            <span class="title">{{resultmeaning}}</span>
            
        </v-layout>
        
    </v-container>
</template>

<script>
export default {
    props: [
    'resultvalue',
    'resultcolor',
    'resultitle',
    'resultmeaning',
    'units',
    ],
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