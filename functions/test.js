// //
// // const obj = {
// //   name: 'yakov',
// //   age: 30,
// //   hobby: 'sing'
// // }
// //
// // const {name:newName, age:myAge, hobby:hobby} = obj
// //
// // console.log(obj)
// //
// //
// // const name = document.getElementById('name')
// // name.innerHTML = obj.name;
// //
// // addEventListener('scroll', ()=> {
// //   if(scrollY < 100 )
// //   name.classList.toggle('niso')
// // })
// //
// //
// // function setValue(ev) {
// //   console.log(ev)
// //   // const value = ev.target.value
// //   const input = document.getElementById('input')
// //   const text = document.getElementById('text')
// //   text.innerHTML = input.value
// // }
// //
// //
// //
// //
// // // const arr = [
// // //   {name: 'yakov', age: '20'},
// // //   {name: 'mayan', age: '30'},
// // //   {name: 'idan', age: '40'},
// // //   {name: 'ofek' , age: '50'},
// // //   {name: 'liran' , age: '70'},
// // //   {name: 'sara' , age: '80'},
// // //   {name: 'beni' , age: '90'},
// // //   {name: 'itzik' , age: '100'},
// // // ]
// // //
// // //  const obj = {
// // //   name: 'tamir',
// // //    age: 50,
// // //    hobby: 'guitar',
// // //    city: 'kfarSaba',
// // //  }
// // //
// // //  const {
// // //   name,
// // //   age,
// // //   hobby,
// // //   city
// // //  } = obj;
// // //
// // // const number = ['1','2','3','4','5'];
// // // const numberTwo = ['6', '7', '8'];
// // //
// // // const [tamir, idan, ofek] = number;
// // //
// // // function getGrandFather(age) {
// // //   console.log(arr.filter(person => person.age >= age), 'filter!!!!')
// // // }
// // //
// // // const users = []
// // // arr.map(person => {
// // //   if(person.age >= 60) {
// // //     users.push(person)
// // //   }
// // // })
// // //
// // // function deleteSaba(age) {
// // //
// // //  // const filtered = arr.filter(person => person.age !== age)
// // //  //  console.log(filtered)
// // //   const newSabe = {name: 'moses', age: '110'}
// // //   const index = arr.findIndex(person => person.age === age);
// // //   arr.splice(index, 1, newSabe);
// // //   console.log(arr)
// // // }
// // //
// // // deleteSaba('40')
//
//
// function a (callback){
//   setTimeout(()=>{
//     console.log('1')
//     callback()
//   }, 4000)
// }
//
// function b (callback){
//   setTimeout(()=>{
//     console.log('2')
//     callback()
//   }, 3000)
// }
//
// function c (callback){
//   setTimeout(()=>{
//     console.log('3')
//     callback()
//   }, 2000)
// }
//
// function d (){
//   setTimeout(()=>{
//     console.log('4')
//   }, 1000)
// }
//
// a( () => {
//   b( ()=> {
//     c(  ()=> {
//       d()
//     })
//   })
// })
//
// // const products = [
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// //   {price: 30},
// // ]
// //
// // const sum = products.reduce((first, second)=> first + second.price, 0)
// //
// // let total = 0
// // products.map(pro => total += pro.price)
// //
// // const fruits = ['banana', 'apple', 'melon', 'newpinaplle'];
// //
// // fruits.reduce((first,second)=> console.log(fruits[second]), [])
//
//
//
// const shabat = {
//   pages: [
//     {id: 1, taken: true},
//     {id: 2,taken: false},
//     {id: 3,taken: true},
//     {id: 4,taken: false},
//     {id: 5,taken: true},
//     {id: 6,taken: true},
//   ]
// }
//
// const selected = [
//   {selectedPage: 1, name: 'yakov'},
//   {selectedPage: 5, name: 'elad'},
// ]
//
// const dif = [];
//
// shabat.pages.map(page => {
//   const exist = selected.some(selectedPage => page.id === selectedPage.selectedPage)
//   !exist ? dif.push(page) : null
// })
//
// const filteredPages = shabat.pages.filter(page => page.taken);
//
// console.log(filteredPages)
//


const obj = {
  name: 'yakov',
  age: 20,
  hobbie: 'guitar',
  life: 'tora'
}

const {name, life, age, hobbie} = obj


console.log(life)
