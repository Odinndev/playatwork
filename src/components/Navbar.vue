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
          <form class="uk-search uk-search-default">
            <span class="uk-search-icon-flip-left" uk-search-icon></span>
            <input
              class="light-blue darken-4 uk-search-input"
              type="search"
              placeholder="Search Lifebook"
            />
          </form>
        </div>

        <div class="uk-navbar-item">
          <v-avatar size="38" class="mr-3">
            <span class="mr-2" style="color: white; font-weight: bold"
              >Óðinn</span
            >
            <img
              src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/119065676_3375005745871647_1732712096651772016_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=HwnB0Jqt3h4AX8nC1f_&_nc_ht=scontent.frkv2-1.fna&oh=0d7969acda5e043284d856a29d9349b7&oe=5FA84FAF"
              alt="John"
            />
          </v-avatar>
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
  .uk-navbar-left {
    .uk-navbar-item {
      form.uk-search {
        span.uk-icon {
          color: white;
        }

        .uk-search-input {
          border-color: grey;
          border-radius: 40px;
        }
      }
    }

    a.uk-logo {
    }

    ul {
      li {
        a {
        }
      }
    }
  }

  .uk-navbar-right {
    button.v-btn {
      .v-button__content {
      }
    }
  }
}
</style>
