import { defineStore } from "pinia";

export const gameStoreUpdated = defineStore('gamesUpdated', {
  state: () => ({
    addGameForm: {
      title: "",
      genre: "",
      played: false,
    },
  }),
  actions: {
    mixinSuccess() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      })

      Toast.fire({
        icon: "success",
        title: "Jogo incluído com sucesso",
      });
    },

    mixinError() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title:
          "Oops...Tivemos um erro no registro do jogo... faltam informações requiridas!",
      });
    }
  }
})

export const gameStore = defineStore('gameStore', {
  state: () => ({
    games: [],
    editForm: {
      id: "",
      title: "",
      genre: "",
      played: false,
    },
  }),

  actions: {
    getGames() {
      this.games = JSON.parse(localStorage.getItem("Games"));
      if (!this.games) this.games = [];
    },

    editGame(game) {
      this.editForm = game;
      console.log(this.editForm);
    },

    // Delete Game
    deleteGame(game) {
      localStorage.removeItem("Games");
    },
    // End
  },
})
