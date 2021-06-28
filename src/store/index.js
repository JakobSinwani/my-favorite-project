import Vue from 'vue'
import Vuex from 'vuex'

import products from './products/index'
import users from './users/index'


Vue.use(Vuex)



export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      products,
      users
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
