//   for(let i = 0 i < people.length i++){
//     console.log(people[i].name)
//   }

// 如何印出 1~10?
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)

let i
for(i = 1; i <= 10 ; i++)
{
    console.log(i)
}
// for ([初始表達式]; [條件式]; [遞增表達式])
//   陳述式

// 白話文
// for (初始值 ; 終止條件 ; 遞增)


// while 陳述式會不斷執行它的陳述式只要指定的條件式判斷為true。一個while陳述式看起來如下：
// while (條件)
//   陳述式

// 無限迴圈，請小心服用
// while (true) {
//     console.log("我愛JavaScript")
// }
// 在檢查條件式以前先執行一次
do {
    i += 1
    console.log(i)
} while (i < 5)
// do
//   陳述式
// while (條件式)

const employee = {
    firstName: 'Ken',
    lastName: 'Chen',
    position: '前端工程師',
    age: 18,
    skills: ['JavaScript', 'React', 'PhotoShop'],
}
const luckyNumbers = [1,45,99]
// 如何迭代物件跟陣列呢？
for (prop in employee) {
    // 印出key
    console.log(prop)
}
for (prop in luckyNumbers) {
    // 印出key
    console.log(prop)
}
// for (variable in object) {
//     陳述
// }
for (prop of employee) {
    // 無法使用
    console.log(prop)
}
for (prop of luckyNumbers) {
    // 印出值
    console.log(prop)
}