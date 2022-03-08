import { defineStore } from "pinia";

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

    editGame(form) {
      console.log(form.title, 'aqui');

      this.form.title = form.title
      this.form.genre = form.genre
      this.form.played = form.played

      console.log();

      return form
    },

    updateGame() {

    },

    deleteGame(gameId) {
      let gamesList = this.getGames()
      
      gamesList.forEach(e => {
        if(e.id == gameId) {
          const indexGame = gamesList.indexOf(e)   
          gamesList.splice(indexGame, 1)

          localStorage.setItem("Games", JSON.stringify(gamesList))
        }  
      })
    },



    // Sweet Alert Mixin
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
  },
})
