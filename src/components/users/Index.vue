<template>
  <Layout>
    <div class="header-component">
      <h3>USERS</h3>
    </div>
    <div class="content-component">
      <div class="header-table">
        <span>List Users</span>
      </div>
      <a-table :columns="columns" :data-source="listUsers" bordered>
        <template slot="name" slot-scope="text">
          <a>{{ text }}</a>
        </template>
        <template slot="title">
          <div class="table-controls">
            <a-button>Export</a-button>
            <div class="search-table">
              <a-select
                :default-value="params.type"
                style="width: 120px"
                @change="handleChangeTypeSearch"
              >
                <a-select-option
                  v-for="type of types"
                  :key="type.type"
                  :value="type.type"
                >
                  {{ type.name }}
                </a-select-option> </a-select
              ><a-input @change="onSearch"></a-input>
            </div>
          </div>
        </template>
        <!-- <template slot="footer" slot-scope="currentPageData"> Footer </template> -->
      </a-table>
    </div>
  </Layout>
</template>

<script>
import Layout from "../layout/Layout";
import { getListUsers } from "../../ultils/requests/getData/getUsers";
const columns = [
  {
    title: "UserID",
    dataIndex: "fake_id",
    scopedSlots: { customRender: "name" },
    key: "userid",
  },
  {
    title: "UserName",
    //className: "username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "moblie",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
export default {
  data() {
    return {
      types: [
        {
          type: 1,
          name: "UserName",
        },
        {
          type: 2,
          name: "UserID",
        },
      ],
      params: {
        page: 1,
        size: 10,
        type: 1,
        search: "",
      },
      listUsers: [],
      columns,
    };
  },
  methods: {
    handleChangeTypeSearch(e) {
      console.log(e);
    },
    onSearch(e) {
      this.params.search = e.target.value;
    },
  },
  computed: {
    //listUsers() {
    // return getListUsers(this, this.params).then((data) => data);
    // console.log(listUsers);
    // return listUsers;
  },
  watch: {
    params: {
      deep: true,
      handler() {
        getListUsers(this, this.params);
      },
    },
  },
  created() {
    getListUsers(this, this.params);
  },
  components: {
    Layout,
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
