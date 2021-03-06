;(function() {
  Vue.component("drawer-cmp", {
    data() {
      return {
        drawer: null,
        items: [
          { icon: 'lightbulb_outline', text: 'Notes' },
          { icon: 'touch_app', text: 'Reminders' },
          { divider: true },
          { heading: 'Labels' },
          { icon: 'add', text: 'Create new label' },
          { divider: true },
          { icon: 'archive', text: 'Archive' },
          { icon: 'delete', text: 'Trash' },
          { divider: true },
          { icon: 'settings', text: 'Settings' },
          { icon: 'chat_bubble', text: 'Trash' },
          { icon: 'help', text: 'Help' },
          { icon: 'phonelink', text: 'App downloads' },
          { icon: 'keyboard', text: 'Keyboard shortcuts' }
        ]
      }
    },
    template: `
        <v-navigation-drawer
          fixed
          :clipped="$vuetify.breakpoint.width > 1264"
          v-model="drawer"
          class="grey lighten-4"
          app
        >
          <v-list
            dense
            class="grey lighten-4"
          >
            <template v-for="(item, i) in items">
              <v-layout
                row
                v-if="item.heading"
                align-center
                :key="i"
              >
                <v-flex xs6>
                  <v-subheader v-if="item.heading">
                    {{ item.heading }}
                  </v-subheader>
                </v-flex>
                <v-flex xs6 class="text-xs-right">
                  <v-btn small flat>edit</v-btn>
                </v-flex>
              </v-layout>
              <v-divider
                dark
                v-else-if="item.divider"
                class="my-4"
                :key="i"
              ></v-divider>
              <v-list-tile
                :key="i"
                v-else
                @click=""
              >
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="grey--text">
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-navigation-drawer>
    `
  });
}());
