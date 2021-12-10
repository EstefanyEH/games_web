import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: [],
    opinions: [],
  },
  mutations: {
    ADD_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },
    ADD_OPINION(state, opinion) {
      state.opinions.push(opinion)
    },
    DELETE_OPINION(state, index) {
      state.opinions.splice(index, 1)
    },
    EDIT_OPINION(state, opinion) {
      console.log(opinion)
      state.opinions[opinion.id]= {
        //id. es el indice del array de opiniones
        //data de card e info recibida(como se muestra en la consola)
        name: opinion.nombre,
        opinion: opinion.opinion,
        nameGame: opinion.juego,
      }
    }

  },
  actions: {
    add_juegos({ commit }) {
      fetch(`https://api.rawg.io/api/games?key=0c86da15f6154f87961521baec201a53`)
        .then(res => {
          return res.json();
        })
        .then((data) => {
          console.log(data.results['0'])
          commit('ADD_JUEGOS', data.results)
        })
    },
    add_opinion: ({ commit }, opinion) => {
      commit('ADD_OPINION', opinion)
    },
    delete_opinion: ({ commit }, index) => {
      commit('DELETE_OPINION', index)
    },
    edit_opinion: ({ commit }, opinion) => {
      commit('EDIT_OPINION', opinion)
    }
  },
  modules: {
  },


})
