<template>
    <v-flex xs12 md3 px-1>
        <router-link :to="link" tag="v-btn">
            <v-btn class="selection-button" :color="color" block>
                <span style="white-space: normal;" class="title font-weight-regular">{{title}}</span>
            </v-btn>
        </router-link>
    </v-flex>
</template>

<script>
export default {
  props: [
    'title',
    'color',
    'link',
    ],
  data() {
    return {
    }
  },
}
</script>

<style>
.selection-button {
    height: 120px;
    /* font-size: 32px; */
}
</style>
