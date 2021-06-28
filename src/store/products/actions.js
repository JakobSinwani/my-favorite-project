export default {
  sayHello: ({state, commit, dispatch, rootState}, data) =>  {
          console.log('I AM ACTION', data);
          console.log('I AM THE STATE!!', state.item)
          commit('changeNofar', data)
    }
}
