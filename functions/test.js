
const obj = {
  name: 'yakov',
  age: 30,
  hobby: 'sing'
}

const {name:newName, age:myAge, hobby:hobby} = obj

console.log(obj)


const name = document.getElementById('name')
name.innerHTML = obj.name;

addEventListener('scroll', ()=> {
  if(scrollY < 100 )
  name.classList.toggle('niso')
})


function setValue(ev) {
  console.log(ev)
  // const value = ev.target.value
  const input = document.getElementById('input')
  const text = document.getElementById('text')
  text.innerHTML = input.value
}




// const arr = [
//   {name: 'yakov', age: '20'},
//   {name: 'mayan', age: '30'},
//   {name: 'idan', age: '40'},
//   {name: 'ofek' , age: '50'},
//   {name: 'liran' , age: '70'},
//   {name: 'sara' , age: '80'},
//   {name: 'beni' , age: '90'},
//   {name: 'itzik' , age: '100'},
// ]
//
//  const obj = {
//   name: 'tamir',
//    age: 50,
//    hobby: 'guitar',
//    city: 'kfarSaba',
//  }
//
//  const {
//   name,
//   age,
//   hobby,
//   city
//  } = obj;
//
// const number = ['1','2','3','4','5'];
// const numberTwo = ['6', '7', '8'];
//
// const [tamir, idan, ofek] = number;
//
// function getGrandFather(age) {
//   console.log(arr.filter(person => person.age >= age), 'filter!!!!')
// }
//
// const users = []
// arr.map(person => {
//   if(person.age >= 60) {
//     users.push(person)
//   }
// })
//
// function deleteSaba(age) {
//
//  // const filtered = arr.filter(person => person.age !== age)
//  //  console.log(filtered)
//   const newSabe = {name: 'moses', age: '110'}
//   const index = arr.findIndex(person => person.age === age);
//   arr.splice(index, 1, newSabe);
//   console.log(arr)
// }
//
// deleteSaba('40')
