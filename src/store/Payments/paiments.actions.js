/*
* @todo: commit - execute mutation from the action function;
*   state - get access to the specific module of the store;
*   dispatch - execute action function from actions
*   rootState - get access to the data of all the store;
*  */
export default {
  doSomething: ({state, commit, dispatch, rootState},phone) => {
      console.log('STATE: ',state.phone)
      console.log('ROOT-STATE: ',rootState)
      // dispatch('products/sayHello', null, {root:true})
      commit('products/changeNofar', 'moshe', {root:true})
  }

}
