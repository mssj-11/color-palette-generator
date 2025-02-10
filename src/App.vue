<template>
  <div class="container">
    <AppHeader />
    <ColorPalette @paletteUpdate="updatePalette" />
    <ColorPreview :palette="palette" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import ColorPalette from './components/ColorPalette.vue';
import ColorPreview from './components/ColorPreview.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    ColorPalette,
    ColorPreview,
    AppFooter
  },
  data() {
    return {
      palette: [],
    };
  },
  methods: {
    updatePalette(newPalette) {
      this.palette = newPalette;
    },
  },
};
</script>

<style>
@import './assets/styles/global.scss';
</style>
