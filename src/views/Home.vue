<template>
  <div class="heim">
    <v-container>
      <v-row justify="space-around">
        <v-card width="400">
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              <span>Þriðjudagur 29/09 <v-icon>mdi-clock</v-icon> 07:14</span>
              <!--{{ now | moment("timezone", "Atlantic/Reykjavik", "DD/MM/YYYY") }}
              {{ now | moment("H:mm") }}-->
            </div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong>
                    <small><v-icon>mdi-clock</v-icon>{{ message.time }}</small>
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
  <!-- .heim -->
</template>

<script>
export default {
  data() {
    return {
      homebase: [],
      messages: [
        {
          from: "Óðinn",
          message:
            "Þreif gufuna niðri. þarf að setja dýnurnar aftur á seinni vaktinni!",
          time: "10:42am",
          color: "yellow lighten-2",
        },
        {
          from: "Halla",
          message: "Þarf ekki að skoða þetta eithvað?",
          time: "10:37am",
          color: "red",
        },
        {
          from: "Steina",
          message: "Ég vil minna á að þrífa Skápana!",
          time: "9:47am",
          color: "yellow darken-2",
        },
      ],
    };
  },
  computed: {
    now: function () {
      return Date.now();
    },
  },
  methods: {},
};
</script>

<style lang="stylus" scoped></style>