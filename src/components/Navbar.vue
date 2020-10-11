<template>
  <div class="navbar">
    <nav class="light-blue darken-2 uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo white" href="#">Lifebook</a>

        <ul class="uk-navbar-nav">
          <li>
            <a href="#">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: star"
              ></span>
              Features
            </a>
          </li>
        </ul>

        <div class="uk-navbar-item">
          <div>Some <a href="#">Link</a></div>
        </div>

        <div class="uk-navbar-item">
          <form action="javascript:void(0)">
            <input
              class="uk-input uk-form-width-small"
              type="text"
              placeholder="Input"
            />
            <button class="uk-button uk-button-default">Button</button>
          </form>
        </div>

        <div class="uk-navbar-right">
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon>mdi-facebook-messenger</v-icon>
          </v-btn>
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon>mdi-bell</v-icon>
          </v-btn>
          <v-btn v-show="!hidden" color="light-blue darken-4" fab dark small>
            <v-icon>mdi-account-circle</v-icon>
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
