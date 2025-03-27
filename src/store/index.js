import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations.js'
import * as getters from './getters'

const store = createStore({
    state,
    actions,
    mutations,
    getters,
})

//module project structure (for scalability)

export default store;