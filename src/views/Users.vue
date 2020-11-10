<template>
  <ListUsers />
</template>

<script>
// @ is an alias to /src
import ListUsers from "../components/users/users/ListUsers";
export default {
  name: "Home",
  components: {
    ListUsers,
  },
};
</script>
