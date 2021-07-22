export default {
  changeToLiorAc: function ({commit, dispatch, state, rootState}, value) {
    debugger
    // דיספטץ' כדי להפעיל אקשיין אחר
    // dispatch('payments/doSomething', null, {root:true})
    // כדי להפעיל מיוטיישן משתמשים בקומיט
    commit('changeToLior', value)
  },

  sayHello: function () {
    console.log('hello moshe')
  }
}
