// 如何印出console 1 ~10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// .....?


// for(起始值;終止條件;每回合結束要遞增、遞減){
//     執行你要做的事情
// }

// 你可以從1開始，你也可以從8開始
// for(let i = 8;i<10;i++){
    // console.log(i)
// }

// 用遞減也可以，如果你終止條件改成大於等於0，但忘記把++改成--，恭喜你，第一個無限迴圈，條件永遠符合 
// for(let i = 10;i>=0;i--){
    // console.log(i)
// }

// 印出 2 4 6 ,8 ,10
// for (let i = 1;i<=10;i++){
    // if(i%2 === 0){
    //     console.log(i)
    // }
    // (i%2 === 0) ? console.log(i) : null
// }

// 1 ~ 10 的加總
// let sum 
// sum = 0
// for (let i = 1;i<=10;i++){
//     // sum = sum + i
//     sum += i
// }
// console.log(sum)



// while語法
// while (條件){
//     裡面要做的事
// }
// while使用情境，for 明確知道要執行幾次，while 我們不知道要執行幾次
// 只要這個條件是true就會永遠執行下去（小心無限迴圈）
// while先檢查條件再執行

// let i = 0
// while(i<1){
//     console.log(i)
//     i++
// }

// do while 語法
// do{
//     要執行得事情
// } while (條件)
// do while先執行再檢查條件

// do {
//     i = i + 1
//     console.log(i)
// } while(i<0)