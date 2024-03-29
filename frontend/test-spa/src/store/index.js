import Vue from 'vue'
import Vuex from 'vuex'

import { fetchVariations } from '@/api'

Vue.use(Vuex)

const state = {
  variations: [] // holds array of variation objects return from REST API
}

const actions = {
  loadVariations ({ commit }) {
    // make async call to fetch variations
    // and use commit to commit the REST API response
    // to set the value in the state using the mutation
    // setVariations
	return fetchVariations()
	  .then((response) => {
	     commit('setVariations', {variations: response.data})
	  })
  }
}

const mutations = {
  // define setVariations mutation to set the list of variations returned
  // by loadVariations action
  setVariations(state, payload) {
    state.variations = payload.variations
  }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
  })
  
  export default store
