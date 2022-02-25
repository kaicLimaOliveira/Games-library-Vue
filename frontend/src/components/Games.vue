<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sketchy/bootstrap.min.css"
        integrity="sha384-RxqHG2ilm4r6aFRpGmBbGTjsqwfqHOKy1ArsMhHusnRO47jcGqpIQqlQK/kmGy9R"
        crossorigin="anonymous"
      />
      <div class="row">
        <div class="col-sm-12">
          <p>Games Library 🎮</p>
          <hr />
          <br />

          <button type="button" class="btn btn-success btn-sm">Add Game</button>
          <br />
          <br />
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Genêro</th>
                <th scope="col">Played?</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(game, index) in games" :key="index">
                <td>{{ game.title }}</td>
                <td>{{ game.genre }}</td>
                <td>
                  <span v-if="game.played">Sim</span>
                  <span v-else>Não</span>
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <button class="btn btn-info btn-sm">Atualizar</button>
                    <button class="btn btn-danger btn-sm">Deletar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    games: [],
  }),
  methods: {
    getGames() {
      try {
        const path = "http://localhost:4000/Games";
        const getRequestJSON = async () => {
          const response = await axios(path).catch((e) => console.log(e));

          this.games = await response.data.Games;
          console.log(this.games, "game");
        };
        getRequestJSON();
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getGames();
  },
};
</script>
