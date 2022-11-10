<template>
  <div class="container">
    <h1>Vue.js + Github</h1>
    <p class="lead">
      Página que lista issues de um repositório do Github, usando Vue.js.
    </p>

    <div v-if="response.status === 'error'" class="alert alert-danger">
      {{ response.message }}
    </div>

    <div class="row">
      <div class="col">
        <div class="form-group">
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="github username"
          />
        </div>
      </div>

      <div class="col">
        <div class="form-group">
          <input
            v-model="repository"
            type="text"
            class="form-control"
            placeholder="github repositório"
          />
        </div>
      </div>

      <div class="col-3">
        <div class="form-group">
          <button @click.prevent.stop="getIssues()" class="btn btn-success">
            GO
          </button>
          <button @click.prevent.stop="reset()" class="btn btn-danger">
            LIMPAR
          </button>
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />
    <!--
    <template v-if="selectedIssue.id">
      <h2>{{ selectedIssue.title }}</h2>
      <div>{{ selectedIssue.body }}</div>
      <a @click.prevent.stop="clearIssue()" class="btn btn-primary" href=""
        >Voltar</a
      >
    </template> -->

    <table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th width="100">Número</th>
          <th>Título</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="loader.getIssues">
          <td class="text-center" colspan="2">
            <img src="/static/loading.svg" alt="" />
          </td>
        </tr>
        <!-- <template v-if="!loader.getIssue"> -->
        <div v-if="showIssues">
          <tr v-for="issue in issues" :key="issue.number">
            <td>
              <router-link
                :to="{
                  name: 'GitHubIssue',
                  params: {
                    name: username,
                    repo: repository,
                    issue: issue.number,
                  },
                }"
              >
                {{ issue.number }}
                <!-- <a @click.prevent.stop="getIssue(issue)">
                  {{ issue.number }}
                </a> -->
              </router-link>
              <!-- <img v-if="issue.is_loading" src="/static/loading.svg" alt="" /> -->
            </td>

            <td>{{ issue.title }}</td>
          </tr>
        </div>
        <!-- </template> -->

        <tr v-if="noIssues">
          <td class="text-center" colspan="2">Nenhuma issue encontrada!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GitHubIssues",
  created() {
    this.getLocalData();
  },
  data() {
    return {
      username: "",
      repository: "",
      issues: [],
      selectedIssue: {},
      response: {
        status: "",
        message: "",
      },
      loader: {
        getIssues: false,
        getIssue: false,
      },
    };
  },
  computed: {
    showIssues() {
      return !!this.issues.length && !this.loader.getIssues;
    },
    noIssues() {
      return !this.issues.length && !this.loader.getIssues;
    },
  },
  methods: {
    reset() {
      this.username = "";
      this.repository = "";
      localStorage.removeItem("gitHubIssues");
    },
    resetResponse() {
      this.response.status = "";
      this.response.message = "";
    },
    getIssues() {
      this.resetResponse();
      this.issues = [];
      if (this.username && this.repository) {
        localStorage.setItem(
          "gitHubIssues",
          JSON.stringify({
            username: this.username,
            repository: this.repository,
          })
        );
        this.loader.getIssues = true;
        const url = `https://api.github.com/repos/${this.username}/${this.repository}/issues`;
        axios
          .get(url)
          .then((response) => {
            this.issues = response.data;
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error.response.data);
            this.response.status = "error";
            this.response.message = "Repositório não existe!";
          })
          .finally(() => {
            this.loader.getIssues = false;
          });
      }
    },
    getIssue(issue) {
      if (this.username && this.repository) {
        // this.loader.getIssue = true;
        this.$set(issue, "is_loading", true);
        const url = `https://api.github.com/repos/${this.username}/${this.repository}/issues/${issue.number}`;
        axios
          .get(url)
          .then((response) => {
            this.selectedIssue = response.data;
          })
          .finally(() => {
            this.$set(issue, "is_loading", false);
          });
      }
    },

    getLocalData() {
      const localData = JSON.parse(localStorage.getItem("gitHubIssues"));
      if (localData && localData.username && localData.repository) {
        this.username = localData.username;
        this.repository = localData.repository;
        this.getIssues();
      }
    },
  },
};
</script>
