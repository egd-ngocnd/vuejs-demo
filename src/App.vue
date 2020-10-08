<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <span class="md-title">Basic Sorting Algorithms</span>
        </md-app-toolbar>
        <md-app-drawer md-permanent="full">
          <md-toolbar class="md-transparent" md-elevation="0">
            Navigation
          </md-toolbar>
          <md-list>
              <md-list-item to="/"><router-link to="/" tag="li" active-class="active" exact>Basic Sorting</router-link></md-list-item>
              <md-list-item to="/menu2"><router-link to="/menu2" tag="li" active-class="active">Sorting 2</router-link></md-list-item>
              <md-list-item to="/menu3"><router-link to="/menu3" tag="li" active-class="active">Menu 3</router-link></md-list-item>
              <md-list-item to="/menu4"><router-link to="/menu4" tag="li" active-class="active">Menu 4</router-link></md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <router-view></router-view>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
#app {
  /* width: 80%; */
  padding: 10px;
  margin: auto;
}
.md-app {
  margin-top: 10px;
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

</style>
