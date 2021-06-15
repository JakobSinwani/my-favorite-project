// async function one(callback) {
// setTimeout(()=> {
//     console.log(1)
//     callback(three)
// },1000)
// }
//
// function two(callback) {
// setTimeout(()=> {
//     console.log(2)
//     callback(four)
// },2000)
//
// }
// function three(callback) {
// setTimeout(()=> {
//     console.log(3)
//     callback(five)
// },3000)
// }
//
// function four(callback) {
//  setTimeout( ()=> {
//      console.log(4)
//      callback(six)
//  }, 1000)
// }
//
// function five(callback) {
//     setTimeout(()=>console.log(5),1000)
//     callback()
// }
//
// function six(){
//     setTimeout(()=>console.log(6),1000)
// }
//
// one(two)
//
//
// function multiOne(number) {
//     return number * number
// }
//
// multiOne(4)
//     .then(r =>  r * r)
//     .then(r =>  r * r)
//     .then(r =>  r * r)

const db = {
    users: {
        1: {id: 1, name: 'nofar', folders: {
            333: {id:333, name:'fol1'},
            444: {id:444, name:'fol2'}
            }},
        2: {id: 2, name: 'yakov'},
    }
}

function getFolder (userId, folderId) {
    console.log(db.users[userId].folders[folderId])
}

// getFolder('1', '333')



//
// function one(funcTwo) {
//     setTimeout( ()=> {
//         console.log(1)
//         funcTwo()
//     },2000)
// }
// function two(funcThree) {
//     setTimeout( ()=> {
//         console.log(2)
//         funcThree()
//     },1800)
// }function three(funcFour) {
//     setTimeout( ()=> {
//         console.log(3)
//         funcFour()
//     },1600)
// }function four(funcFive) {
//     setTimeout( ()=> {
//         console.log(4)
//         funcFive()
//     },1400)
// }
// function five(funcSix) {
//     setTimeout( ()=> {
//         console.log(5)
//         funcSix()
//     },1200)
// }
//
// function six() {
//     setTimeout( ()=> {
//         console.log(6)
//     },1000)
// }
//
// one(()=> {
//     two(()=> {
//         three(()=> {
//             four(()=> {
//                 five(()=> {
//                     six()
//                 })
//             })
//         })
//     })
// })


async function multi (number) {
    return number * number
}

multi(10)
    .then((result)=> {
        console.log('RESULT 1', result)
        return result * result
    })
    .then((result)=> {
        console.log('Reuslt 2 ', result)
    })

async function multiNumber2(number) {
    try {
       const result = number * number
    } catch (e) {

    }
}