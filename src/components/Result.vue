<template>
    <v-container>
        <v-layout
            row wrap
            justify-left
            mt-2
        >

            <span class="title">{{resultitle}}</span>

        </v-layout>

         <v-layout
            row wrap
            justify-left
            mb-2
        >
            <span class="caption">{{units}}</span>

        </v-layout>

        <v-layout
            row wrap
            justify-left
            my-2
        >

            <v-flex xs12 md6 left py-4 px-2 :class="`${resultcolor} text-xs-left`">
                <span class="headline font-weight-bold">{{resultvalue}}</span>
            </v-flex>
            
        </v-layout>

        <v-layout
            row wrap
            justify-left
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