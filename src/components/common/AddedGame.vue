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
                v-model="addGameForm.title"
              />

              <label class="form-label mt-3">Genêro:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Genêro do Game"
                v-model="addGameForm.genre"
              />

              <label class="form-label mt-3">Jogou?</label>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="addGameForm.played"
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

<script>
import { gameStoreUpdated } from "@/store/GameStore";

export default {
  name: "AddedGame",

  setup() {
    const store = gameStoreUpdated();
    const title = store.$state.addGameForm.title;
    const genre = store.$state.addGameForm.genre;
    const played = store.$state.addGameForm.played;

    function resetForm() {
      store.state.addGameForm.title = "";
      store.state.addGameForm.genre = "";
      store.state.addGameForm.played = "";
    }

    return {
      title,
      genre,
      played,
    };

    function sendForm() {
      const id = Date.now();
      console.log(id);

      let newGame = JSON.parse(localStorage.getItem("Games"));
      if (!newGame) newGame = [];

      newGame.push({
        id: id,
        title: this.addGameForm.title,
        genre: this.addGameForm.genre,
        played: this.addGameForm.played,
      });

      if (validateForm()) {
        localStorage.setItem("Games", JSON.stringify(newGame));

        this.resetForm();

        setTimeout(() => {
          this.$router.go();
        }, 3500);
      } else {
      }
    }

    function validateForm() {
      let validate = true;

      if (!this.addGameForm.title) validate = false;
      if (!this.addGameForm.genre) validate = false;

      return validate;
    }
  },
};
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
