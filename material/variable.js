// Variable var let const
// 現代來到了es6之後的年代我們採用較新的
// let const , 他們在block scope 會有良好的優點

// 現在還不太容易解釋block scope 等到未來在講function的時候才有辦法解釋

// 前面這章節裡我們先簡單用var 但是未來我們都會採用let const

// 什麼是變數？把值存進某個地方未來可以使用

// const 必須在宣告時就給定一個值，並且未來不可改變
// const firstname // 沒有給值會噴錯
const firstname = 'YM'
// let 不用在宣告時就給定一個值，並且未來可以改變
let lastname
console.log(firstname,lastname)
// let 可以先宣告，再給值，只是變數還沒給值就使用時，會出現undefined
lastname = 'Chen'
console.log(firstname,lastname)

// 還可以更換變數裡面儲存的值
lastname = 'Chu'
console.log(firstname,lastname)

// 修改const裡面的值會噴錯
// firstname = 'Ken'

// 程式碼中間的空格不會影響這個變數名稱，但是字串會
// lastname      =      'Ch  en'
// console.log(firstname,lastname)

// 思考哪些東西希望被作為常數儲存，未來不希望再被更改
// pi？ 3.14? 3.1415? 3.1416? 
// 薪水？

// 非法的命名
// let first name // 中間不可空白
// let 1name  // 不可數字開頭
// let @name  // 非法字元
// let case   // 保留字

// 合法的命名
// let car   // 一般不是保留字的英文單字
// let 中文  // 合法但實務上不常使用
// let name1 // 數字可以加在後面
// let _name // 前面可以有底線
// let $name // 儲存某個jQuery的物件常用的方式

// 多個單字作為變數名稱
// let firstname = 'a'
// let firstName = 'b' // 駝峰式前端工程師常用的命名方式 
// let first_name ='b' // 後端工程師php, python常用的命名方式
// let FirstName = 'd'
// var THIS_IS_A_CONST = 'g' // 過去沒有const時，常數習慣命名的方式
// console.log(firstname,firstName,first_name,FirstName,THIS_IS_A_CONST)


// 所以上面範例的命名(firstname,lastname)建議改成用firstName、lastName
// let firstName
// let lastName
// firstName = 'Peter'
// console.log(firstName,lastName)