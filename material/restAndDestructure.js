// 解構陣列 Destructure
const [a,b,c] = [1,2,3]
// ... rest operator
const [d,...e] = [4,5,6]  // d 是 4 、 e 是 [5,6]
// 解構物件
const person = {firstName: 'ken', lastName:'chen', age:30}
// const firstName = person.firstName
// const lastName = person.lastName
const {firstName, lastName} = person

console.log(firstName)
console.log(lastName)

// 指派新的變數名稱
const {firstName:coolName} = person
console.log(coolName)
