<template>
  <nav>
    <v-toolbar app class="blue darken-2">
      <!-- <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <h1 class="subheading">MENU</h1> -->
      

      <router-link to="/about" tag="v-btn">
        <v-btn flat name="about">
          <span>Autoriai</span>
        </v-btn>
      </router-link >

      <v-spacer></v-spacer>

      <router-link to="/" tag="v-btn">
        <v-btn flat name="pradzia">
          <span>PRADŽIA</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </router-link >
    </v-toolbar>

    <!-- <v-navigation-drawer app v-model="drawer" class="blue darken-2
">

      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{link.text}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer> -->
  </nav>
</template>
<script>

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'folder', text: 'CKD - suaugusiųjų', route: '/ckd' },
      ]
    }
  },
  components: {
  }
}
</script>
