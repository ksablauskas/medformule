<template>
  <v-layout
  text-md-center
    row wrap
  >
    <v-flex xs12>
      <span class="caption ">{{text}}</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
    }
  }
}
</script>

<style>

</style>