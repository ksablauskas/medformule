<template>
        <v-layout
            row wrap
            justify-left
            py-2
        >
            <v-flex xs12 md6 px-2 py-1 class="error text-xs-center">
                <span class="body-2">{{message}}</span>
            </v-flex>

        </v-layout>
        
</template>

<script>
export default {
    props: [
    'message',
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