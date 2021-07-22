export default {
  setPhoneOnStateMu: ((state, newPhone)=> {
    alert(newPhone);
    state.phone = newPhone
    alert('i am the state ' + state.phone);
  })
}


