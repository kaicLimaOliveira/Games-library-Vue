import { defineStore } from "pinia";
const Swal = require('sweetalert2')

// Home
export const GameStore = defineStore('GameStore', {
  state: () => ({
    games: [],
    gameForm: {
      id: "",
      title: "",
      genre: "",
      played: false,
    },
    form: {
      title: "",
      genre: "",
      played: false,
    }
  }),

  actions: {
    getGames() {
      this.games = JSON.parse(localStorage.getItem("Games"));
      if (!this.games) this.games = [];

      return this.games
    },

    editGame(game) {
      this.form = game
      this.getGamesInfo(this.form)

      return game
    },

    getGamesInfo(form) {
      console.log(form);
      return form
    },

    updateGame(formGame) {
      let gamesList = this.getGames()

      gamesList.forEach(e => {
        if (e.id == this.form.id) {
          const indexGame = gamesList.indexOf(e)
          gamesList.splice(indexGame, 1, formGame)

          localStorage.setItem("Games", JSON.stringify(gamesList))
        }
      })
    },

    deleteGame(gameId) {
      let gamesList = this.getGames()

      gamesList.forEach(e => {
        if (e.id == gameId) {
          const indexGame = gamesList.indexOf(e)
          gamesList.splice(indexGame, 1)

          localStorage.setItem("Games", JSON.stringify(gamesList))
        }
      })
    },

    // Sweet Alert Mixin
    sweetAlert(icon, title) {
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

      Toast.fire(icon, title);
    },
  },
})
