<template>
  <div class="navbar">
    <nav class="light-blue darken-2 uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo white" href="#">Lifebook</a>

        <ul class="uk-navbar-nav">
          <li>
            <a href="#" style="color: white">
              <span><v-icon size="15">mdi-home</v-icon> Home</span>
            </a>
          </li>
          <li>
            <a href="#" style="color: white">
              <span
                ><v-icon size="15">mdi-book-open-page-variant</v-icon>
                Pages</span
              >
            </a>
          </li>
          <li>
            <a href="#" style="color: white">
              <span
                ><v-icon size="15">mdi-account-multiple</v-icon> Groups</span
              >
            </a>
          </li>
          <li>
            <a href="#" style="color: white">
              <span><v-icon size="15">mdi-monitor-multiple</v-icon> Watch</span>
            </a>
          </li>
          <li>
            <a href="#" style="color: white">
              <span><v-icon size="15">mdi-gamepad-round-up</v-icon> Games</span>
            </a>
          </li>
        </ul>

        <div class="uk-navbar-item">
          <div>Some <a href="#">Link</a></div>
        </div>

        <div class="uk-navbar-item">
          <div class="uk-margin">
            <form class="uk-search uk-search-default">
              <span class="uk-search-icon-flip-left" uk-search-icon></span>
              <input
                class="uk-search-input"
                type="search"
                placeholder="Search Lifebook"
              />
            </form>
          </div>
        </div>

        <div class="uk-navbar-right">
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon size="20">mdi-plus</v-icon>
          </v-btn>
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon size="20">mdi-facebook-messenger</v-icon>
          </v-btn>
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon size="20">mdi-bell</v-icon>
          </v-btn>
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon size="20">mdi-account-circle</v-icon>
          </v-btn>
        </div>
      </div>
    </nav>
  </div>
  <!-- .navbar -->
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="stylus">
.uk-navbar {
}
</style>
