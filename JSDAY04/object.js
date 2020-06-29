// alert(11111111)
const employee = {
    firstName : 'Ken',
    lastName : 'Chen',
    position : '前端工程師',
    age:18,
    skills:['React', 'JavaScript'],
    address:{
        city: '台北',
        district: '信義',
        postCode: '102'
    }
}
let value
// 取得物件內特定屬性得值
value = employee
value = employee.age
value = employee['lastName']
value = employee.skills[1]
value = employee.address.city
value = employee.address['district']
// console.log(value)

const myFriends = [
    {name: 'KK', astrologicalSign: '雙魚'},
    {name: 'Johney', astrologicalSign: '射手'},
    {name: 'Alex', astrologicalSign: '牡羊'}
  ]
//   console.log(myFriends[0].name)
//   console.log( 1 == '1')
//   console.log(1 === '1')

// 原始型別的值
// （數字、布林、字串、null、undefined、Symbol、bigInt)
// 除了原始型別得值之外的值都是物件
// 物件的存放是一個參考（類似地址的概念）
  const myWallet = {
    coin:10
}
const yourWallet = {
    coin:10
}
const wifeWallet = yourWallet
console.log(myWallet.coin === yourWallet.coin)
console.log(wifeWallet === yourWallet)