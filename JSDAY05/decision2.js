// // if(條件式){

// // }else if(條件式){

// // } else {

// // }

// 什麼是條件是？會回傳true、false的值
// 舉例看看哪些運算會回傳true false吧

// 使用!
// if(!true){
//     console.log('hi')
// }else{
//     console.log('Bye')
// }
// //  ==== , ==, >=, <= , > , < , != , &&, ||, ! ....
// // true false

// 使用 ||
// // 老人(65 up) 小孩(18 down)
// let age = 0
// if( age <18 || age>65 ){
//     console.log('工作？？？這啥？')
// } else {
//     console.log('認真工作、賺錢')
// }

// 使用 &&
// // 印出  ~12 少年 12 ~18 青年 18歲以上是成年
// if(age >=0 && age < 12){
//     console.log(`兒童`)
//   } else if(age > 12 && age < 18){
//     console.log(`青年`)
//   } else if (age>18){
//     console.log(`成年`)
//   } else {
//     console.log('輸入錯誤')
//   }

// //   條件判斷底下如果要執行的程式碼只有一行可以省略括號
// let id = 900
// if(id===100)
//     console.log('正確')
// else
//   console.log('錯誤')


// // 三元運算子
// // 值 ? 對的時候回傳這個 : 錯的時候回傳這個
// let gender = 'male'
// let isMale = gender === 'male' ? true : false
// console.log(isMale)
// let isFemale = gender=== 'male' ? false : true
// 或是
// let isFemale = gender=== 'female' ? true : false
// console.log(isFemale)

// 回到上面的例子
// let value = ( age<18 && age>=0 ) ? '小孩' : '大人'
// console.log(value)




let day
day = 0
// switch(值、條件結果) {
//     case 某個值:
//         要執行的事情
//     break
// }
switch(day){
  case 0:
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
    break
}

// console.log(`Today is ${day}`)
let num = 99
// 如果沒有break 跳出結果是...?
switch(num){
    case 1:
        console.log(num)
    case 99:
        console.log(num)
        // break
    case 100:
        console.log(num)
    case 101:
        console.log(num)
    case 102:
        console.log(num)
    case 103:
        console.log(num)
}
