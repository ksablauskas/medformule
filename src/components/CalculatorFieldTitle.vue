<template>
    <v-layout
      row wrap
      my-2
    >
      <v-flex xs12>
        <h3 class="font-weight-regular">{{title}}</h3>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
