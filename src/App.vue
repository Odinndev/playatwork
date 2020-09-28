<template>
  <div id="app">
    <Row>
      <v-app>
        <Col :xs="0" :lg="3">
          <Navbar></Navbar>
        </Col>
        <Col :xs="21" :lg="21">
          <router-view />
        </Col>
        <Col :xs="24" :lg="24">
          <Footer></Footer>
        </Col>
      </v-app>
    </Row>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "./views/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>