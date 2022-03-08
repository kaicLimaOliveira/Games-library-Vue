<template>
  <form>
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Adicione um jogo novo
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div action="">
              <label class="form-label">Título:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Nome do Game"
                v-model="title"
              />

              <label class="form-label mt-3">Genêro:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Genêro do Game"
                v-model="genre"
              />

              <label class="form-label mt-3">Jogou?</label>
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                v-model="played"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-info"
              data-bs-dismiss="modal"
              @click="updateGame()"
            >
              Atualizar
            </button>

            <button
              type="button"
              class="btn btn-outline-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { GameStore } from "@/store/GameStore";
import { ref, onActivated, onBeforeMount } from 'vue'

const props = defineProps(['form'])
const store = GameStore();

const game = store.$state.games
const title = store.$state.gameForm.title;
const genre = store.$state.gameForm.genre;
const played = store.$state.gameForm.played;

const games = store.getGames()
onBeforeMount(() => {
  console.log(store.form)
})

// store.editGame()


function updateGame() {
  console.log("Atualizado!");
}


</script>

<style scoped>
[type="checkbox"]:before {
  top: 1em;
  left: 2.5em;
}

[type="checkbox"]:checked:after {
  top: 0.7em;
  left: 1.8em;
}
</style>
