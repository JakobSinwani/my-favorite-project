export default {
  changeToLior: function (state, value) {
    debugger
    console.log(`%ci am value: ${value}`, "color:pink; font-size:30px")
    state.name = value;
  }
}
