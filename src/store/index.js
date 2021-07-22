import Vue from 'vue'
import Vuex from 'vuex'

import users from './users/index'
import payments from './Payments/index';
import products from './products/index';

Vue.use(Vuex)



export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      payments,
      products,
      users
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
