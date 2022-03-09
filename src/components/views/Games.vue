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
                <td>{{ game.title }}</td>
                <td>{{ game.genre }}</td>
                <td>
                  <span v-if="game.played">Sim</span>
                  <span v-else>Não</span>
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      class="btn btn-info btn-sm action"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      @click="editGame(game)"
                    >
                      Atualizar
                    </button>
                    <button
                      class="btn btn-danger btn-sm action"
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

      <!-- Modal -->
      <AddedGame />
      <UpdatedGame />
      <!-- Modal -->
    </div>
  </div>
</template>

<script setup>
import { GameStore } from "@/store/GameStore";
import AddedGame from "@/components/common/AddedGame.vue";
import UpdatedGame from "@/components/common/UpdatedGame.vue";
import { useRouter } from "vue-router";

const store = GameStore();
const router = useRouter();

const games = store.getGames();

function editGame(game) {
  store.editGame(game);
}

function deleteGame(game) {
  setTimeout(() => {
    router.go();
  }, 3100);

  store.deleteGame(game.id);

  store.sweetAlert({
    icon: "success",
    title: "Jogo excluído com sucesso",
  });
}
</script>

<style scoped>
.title-head,
.footer-text {
  border-radius: 10px;
  padding: 5px;
}

tr {
  text-align: center;
}

@media (min-width: 380px) and (max-width: 480px) {
  html,
  body {
    font-size: 90%;
  }
  tr {
    font-size: small;
    min-width: 380px;
  }
  button {
    font-size: smaller;
  }
}

@media (min-width: 315px) and (max-width: 379px) {
  html,
  body {
    font-size: 80%;
  }
  tr,
  thead {
    font-size: xx-small;
  }
  button {
    font-size: xx-small;
  }
}
</style>
