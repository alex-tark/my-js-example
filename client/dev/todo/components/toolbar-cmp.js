;(function() {
  Vue.component("toolbar-cmp", {
    data() {
      return {
      }
    },
    template: `
      <v-toolbar color="amber" app absolute clipped-left>
        <v-toolbar-side-icon v-if="$vuetify.breakpoint.width <= 1264" @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title">Admin&nbsp;<span class="text">Pool</span></span>
      </v-toolbar>
    `
  });
}());
