<template>
  <v-container>
    <v-layout
      text-xs-center
      row wrap
    >
      <v-flex xs12>
        <h1 class="display-1 text-xs-center mt-2">{{displayTitle}}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      displayTitle: this.title.toUpperCase()
    }
  }
}
</script>

<style>

</style>
