<template>
  <div class="app-wrapper" v-loading.fullscreen.lock="getFullLoading">
    <sHead></sHead>
    <sMenu></sMenu>
    <div
      class="app-content"
      :style="{ 'min-height': $store.state.min_height - 10 + 'px' }"
      v-if="$store.state.showContent"
    >
      <router-view></router-view>
    </div>
    <sRibbon></sRibbon>
  </div>
</template>

<script>
import sHead from './components/head';
import sMenu from './components/menu';
import sRibbon from './components/ribbon';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: mapGetters(['getFullLoading']),
  components: {
    sHead,
    sMenu,
    sRibbon
  },
  created() {
    this.initStyle();
    this.initDict();
  },
  methods: {
    GetQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return '';
    },
    initDict() {
      this.$store.dispatch('initDict');
    },
    initStyle() {
      var self = this;
      var minHeight = String(document.documentElement.clientHeight - 100);
      self.$store.dispatch('setMinHeight', minHeight);

      $(window).resize(function() {
        minHeight = String(document.documentElement.clientHeight - 100);
        self.$store.dispatch('setMinHeight', minHeight);
      });
    }
  }
};
</script>
