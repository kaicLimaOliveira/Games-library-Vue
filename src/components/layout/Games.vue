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
          <h1 class="text-center bg-primary text-white title-head">
            Games Library 🕹️
          </h1>
          <hr />
          <br />

          <button
            type="button"
            class="btn btn-success btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            v-if="games.length == 0"
          >
            Novo Jogo
          </button>
          <button
            type="button"
            class="btn btn-success btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            v-else
          >
            Novo Jogo+
          </button>
          <br />
          <br />
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Genêro</th>
                <th scope="col">Jogou?</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(game, index) in games" :key="index">
                <td>{{ store.state.addGameForm.title }}</td>
                <td>{{ store.state.addGameForm.genre }}</td>
                <td>
                  <span v-if="game.played">Sim</span>
                  <span v-else>Não</span>
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      class="btn btn-info btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      @click="editGame(game)"
                    >
                      Atualizar
                    </button>
                    <button
                      class="btn btn-danger btn-sm"
                      @click="deleteGame(game)"
                    >
                      Deletar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <footer class="bg-primary text-white text-center footer-text">
            Copyright &copy;. All rights reserved 2022.
          </footer>
        </div>
      </div>

      {{ title }}

      <!-- Modal -->
      <!-- <AddedGame />
      <UpdatedGame :editForm="editForm" /> -->
      <!-- Modal -->
    </div>
  </div>
</template>

<script>
import { gameStore } from "@/store/GameStore";

export default {
  name: "Games",
  setup() {
    const store = gameStore();
    const games = store.$state.games;
    const title = store.$state.editForm.title;
    const genre = store.$state.editForm.genre;

    console.log(games.length);
    return {
      title,
      games,
      genre,
    };
  },
};
</script>

<style scoped>
.title-head,
.footer-text {
  border-radius: 10px;
  padding: 5px;
}

@media (min-width: 380px) and (max-width: 480px) {
  html,
  body {
    font-size: 95%;
  }
  tr {
    font-size: xx-small;
    min-width: 380px;
  }
}
</style>
