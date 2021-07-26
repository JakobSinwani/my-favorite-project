
const products = [
  {name: 'bamba', price: 4, id: 1},
  {name: 'emit', price: 5, id: 2},
  {name: 'props', price: 12, id: 3},
  {name: 'katshop', price: 10, id: 4},
  {name: 'bisli', price: 8, id: 5},
]

const cart = [
  {name: 'bisli', price: 8, id: 5},
  {name: 'emit', price: 5, id: 2},
]

const school = {
  math: {
    students: [{name: 'moshe'}, {name: 'lior'}, {name: 'elad'}],
    description: 'best Math In the worlds'
  },
  bible: {
    students: [{name: 'moshe'}, {name: 'lior'}, {name: 'elad'}],
  }
}

console.log(Object.values(school.math))

// products.forEach(product => {
//  const exist = cart.some(cartProduct => cartProduct.id === product.id)
//   if(!exist) {
//     console.log(product)
//   }
// })

function removeProduct(id) {
  // const index = products.findIndex(product => product.id === id)
  //  products.splice(index, 1);

  const filtered = products.filter(product => product.id !== id)
  console.log(filtered)
}

// removeProduct(3)
//
// console.log(products)

// function sumArray(arrOne, value) {
//
//   const bool = arrOne.some(product => {
//     return product.id === value
//   })
//
//   console.log(bool)
// }
//
// sumArray(products, 6)

// products.forEach(function (singleProduct, productIndex) {
//   console.log(productIndex + ': ' , singleProduct)
// })

// MAP AND FOREACH
// products.forEach(product=> console.log("forEach" , product.name));
// products.map(product => console.log("map: ", product.name));


const filteredProducts = products.filter(product => product.price > 6);


const findProduct = products.find(product => product.id === 2)

function arrMethods(arr,id) {
  const filteredProducts = arr.filter(product => product.id > id);
  console.log(filteredProducts)
}

// arrMethods(products, 2);

const total = products.reduce((initialValue, singleProduct) => initialValue + singleProduct.price, 0);


//
// console.log("total: " , total)


