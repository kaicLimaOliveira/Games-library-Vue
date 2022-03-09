<template>
  <form>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
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
                v-model="form.title"
              />

              <label class="form-label mt-3">Genêro:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Genêro do Game"
                v-model="form.genre"
              />

              <label class="form-label mt-3">Jogou?</label>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="form.played"
                id="flexCheckDefault"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-info"
              data-bs-dismiss="modal"
              @click="sendForm"
            >
              Enviar
            </button>
            <button
              type="reset"
              class="btn btn-outline-danger"
              @click="resetForm"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { GameStore } from "@/store/GameStore";
import { useRouter } from "vue-router";
import { ref } from "vue";

const store = GameStore();
const router = useRouter();

const form = ref({
  title: "",
  genre: "",
  played: false,
});

let title = store.$state.gameForm.title;
let genre = store.$state.gameForm.genre;
let played = store.$state.gameForm.played;
let games = store.$state.games;

function resetForm() {
  form.value.title = "";
  form.value.genre = "";
  form.value.played = false;
}

function validateForm() {
  let validate = true;

  if (!form.value.title) validate = false;
  if (!form.value.genre) validate = false;

  return validate;
}

function sendForm() {
  const id = Date.now();

  games = JSON.parse(localStorage.getItem("Games"));
  if (!games) games = [];

  title = form.value.title;
  genre = form.value.genre;
  played = form.value.played;

  games.push({
    id: id,
    title: title,
    genre: genre,
    played: played,
  });

  if (validateForm()) {
    localStorage.setItem("Games", JSON.stringify(games));

    setTimeout(() => {
      router.go();
    }, 3100);

    store.sweetAlert({
      icon: "success",
      title: "Jogo incluído com sucesso",
    });

    resetForm();
  } else {
    store.sweetAlert({
      icon: "error",
      title:
        "Oops...Tivemos um erro no registro do jogo... faltam informações requiridas!",
    });
  }
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
