<template>
  <Layout>
    <Container />
  </Layout>
</template>

<script>
// @ is an alias to /src
import Container from "../components/media/Container";
import Layout from "../components/layout/Layout";
export default {
  name: "Home",
  components: {
    Layout,
    Container,
  },
};
</script>
