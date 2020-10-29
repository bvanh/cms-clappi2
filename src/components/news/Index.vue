<template>
  <Layout>
    <div class="header-component">
      <h3>NEWS</h3>
    </div>
    <div class="content-component">
      <div class="header-table">
        <span>List News <i>(30)</i></span>
      </div>
      <a-table
        :columns="columnsTable"
        :data-source="listNews"
        bordered
        :row-key="(record) => record.fake_id"
        :pagination="false"
      >
        <template slot="name" slot-scope="text">
          <a>{{ text }}</a>
        </template>
        <template slot="title">
          <div class="table-controls">
            <!-- <vue-excel-xlsx
              :data="listNews"
              :columns="columnsExport"
              :filename="'listNews'"
              :sheetname="'Users'"
              class="btn-export"
            >
              Export
            </vue-excel-xlsx> -->
            <p></p>
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
        <template slot="footer">
          <a-pagination
            :total="totalItems"
            :show-total="
              (total, range) => `${range[0]}-${range[1]} of ${total} items`
            "
            :page-size="params.size"
            :default-current="currentPage"
            @change="handleChangePage"
          />
        </template>
        <!-- <template slot="footer" slot-scope="currentPageData"> Footer </template> -->
      </a-table>
    </div>
  </Layout>
</template>

<script>
import Layout from "../layout/Layout";
import { getListNews } from "../../ultils/requests/news/getNews";
import { columnsExport, columnsTable } from "./services";
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
      listNews: [],
      dataExport: [],
      totalItems: null,
      currentPage: null,
      columnsTable,
      columnsExport,
    };
  },
  methods: {
    handleChangeTypeSearch(e) {
      console.log(e);
    },
    handleChangePage(e) {
      this.params.page = e;
    },
    onSearch(e) {
      this.params.search = e.target.value;
    },
  },
  watch: {
    params: {
      deep: true,
      handler() {
        getListNews(this, this.params);
      },
    },
  },
  created() {
    getListNews(this, this.params);
  },
  components: {
    Layout,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>