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
                v-model="editForm.title"
              />

              <label class="form-label mt-3">Genêro:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Genêro do Game"
                v-model="editForm.genre"
              />

              <label class="form-label mt-3">Jogou?</label>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="editForm.played"
                id="flexCheckDefault"
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

<script>
import axios from "axios";

export default {
  name: "AddedGame",
  props: {
    editForm: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateGame() {
      const path = "http://localhost:4000/updated_game/";
      const getUpdateGame = async () => {
        const response = await axios
          .post(path, {
            id: this.editForm._id,
            title: this.editForm.title,
            genre: this.editForm.genre,
            played: this.editForm.played,
          })
          .catch((e) => console.log(e));

        const res = await response;
      };

      getUpdateGame();
    },
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
