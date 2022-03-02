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
              @click="sendForm()"
            >
              Enviar
            </button>
            <button
              type="reset"
              class="btn btn-outline-danger"
              @click="resetForm()"
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
import axios from "axios";

export default {
  name: "AddedGame",
  data: () => ({
    addGameForm: {
      title: "",
      genre: "",
      played: false,
    },
  }),
  methods: {
    resetForm() {
      this.addGameForm.title = "";
      this.addGameForm.genre = "";
      this.addGameForm.played = "";
    },
    sendForm() {
      if (this.validateForm()) {
        const path = "http://localhost:4000/games";
        const sendNewGame = async () => {
          const response = await axios
            .post(path, {
              title: this.addGameForm.title,
              genre: this.addGameForm.genre,
              played: this.addGameForm.played,
            })
            .catch((e) => console.log(e));

          const res = await response;
        };

        sendNewGame();
        this.resetForm();

        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Jogo incluído com sucesso",
        });

        setTimeout(() => {
          this.$router.go();
        }, 3500);
      } else {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title:
            "Oops...Tivemos um erro no registro do jogo... faltam informações requiridas!",
        });
      }
    },
    validateForm() {
      let validate = true;

      if (!this.addGameForm.title) validate = false;
      if (!this.addGameForm.genre) validate = false;

      return validate;
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
