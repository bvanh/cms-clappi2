<template>
  <Layout>
    <UserDetail />
  </Layout>
</template>

<script>
// @ is an alias to /src
import UserDetail from "../components/users/detail//UserDetail";
import Layout from "../components/layout/Layout";
export default {
  name: "Home",
  components: {
    Layout,
    UserDetail,
  },
};
</script>
