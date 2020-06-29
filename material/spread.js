// es6 spread operator 展開 ...

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
// 陣列串接、合併
let combinedArr = arr1.concat(arr2)
combinedArr = [arr1, arr2]
combinedArr = [...arr1,...arr2]




// 如何複製arr4?
const arr4 = [1,2,3]
const arr5 = arr4
const arr6 = [...arr4]  //  等於arr4.slice()
// 指向同一個參考
console.log(arr5 === arr4)
// 創立了一個完全新的array
console.log(arr6 === arr4)
arr5.push(4)
// arr5 跟 arr4都被推進一個數字4
console.log(arr4,arr5) // (4) [1, 2, 3, 4] (4) [1, 2, 3, 4]
// arr6 跟 arr4是兩個獨立不同的array
arr6.push(5)
console.log(arr4,arr6) // (4) [1, 2, 3, 4] (4) [1, 2, 3, 5]

const arr7 = [0, ...arr4, 4] // 取代push(4) unshift(0)


// 物件合併
const person = {firstName: 'ken', lastName:'chen', age:30}
const company = {position:'前端工程師',salary:999999}
const employee = {...person, ...company}

// 如何複製obj
const myCar = { brand: 'toyota', model:'altis'}
const yourCar = myCar
yourCar.brand = 'Porche'
// yourCar 跟 myCar的品牌都變成保時捷了
console.log(myCar, yourCar)
const hisCar = {...myCar} 
hisCar.brand = '法拉利'
console.log(myCar, hisCar)
// 指向同一個參考
console.log(myCar === yourCar)
// 創立了一個完全新的object
console.log(myCar === hisCar)