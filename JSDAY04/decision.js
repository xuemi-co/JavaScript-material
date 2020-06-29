// alert('Hi ')
// 假如某個情況，就做什麼
// if(條件) {
//   做些事情
// } 
const isLoggedIn = false
let userName = 'Ken'
let greeting = 'Hi!'
// if(isLoggedIn){
//     console.log('登入狀態')
//     console.log(`${greeting} ${userName}`)
// } else {
//     console.log('登出狀態')
// }
// 寫兩個if會跑兩次判斷，所以我們才需要else
// if(!isLoggedIn){
//     console.log('登出狀態')
// } 

let season
let month
// m 1,2,3春天
// m 4,5,6夏天
// m 7,8,9秋天
// m 10,11,12 冬天
month = 6
// if(month ===1 || month===2 || month ===3 ){
//     season = '春天'
// // } else if(month ===2){
// //     season = '春'
// // } else if(month ===3){
// //     season = '春天'
// } else if(month ===4 || month ===5 || month ===6){
//     season = '夏天'
// // } else if(month ===5){
// //     season = '夏天'
// // } else if(month ===6){
// //     season = '夏天'
// } else if(month ===7 || month ===8 || month ===9){
//     season = '秋天'
// } else if(month ===10 || month ===11 || month ===12){
//     season = '冬天'
// } else {
//     season = '使用者輸入錯'
// }
// 避免非預期狀況


// 很多情況得判斷
// switch(month) {
//     case 1:
//         season = '春'
//         break
//     case 2:
//         season = '春'
//         break
//     case 3:
//         season = '春'
//         break
//     case 4:
//         season = '夏天'
//         break
//     case 5:
//         season = '夏天'
//         break
//     case 6:
//         season = '夏天'
//         break
//     case 1:
//         season = '春'
//         break
//     default:
//         season = '輸入錯誤'
// }
// month =1
// switch(month) {
//     case 1:
//     case 2:
//     case 3:
//         season = '春'
//         break
//     case 4:
//     case 5:
//     case 6:
//         season = '夏天'
//         break
//     case 7:
//     case 8:
//     case 9:
//         season = '秋天'
//         break
//     case 10:
//     case 11:
//     case 12:
//         season = '冬天'
//         break
//     default:
//         season = '輸入錯誤'
// }
// console.log(season)

// function 把一系列的任務打包
function checkSeason(month){
    switch(month) {
        case 1:
        case 2:
        case 3:
            season = '春'
            break
        case 4:
        case 5:
        case 6:
            season = '夏天'
            break
        case 7:
        case 8:
        case 9:
            season = '秋天'
            break
        case 10:
        case 11:
        case 12:
            season = '冬天'
            break
        default:
            season = '輸入錯誤'
    }
    console.log(season)
}

// checkSeason(1)
// checkSeason(2)
// checkSeason(3)
// checkSeason(4)
// checkSeason(5)
// checkSeason(6)

// 要重複一直做的事情，迴圈
for(let i =1; i<=12; i++){
    checkSeason(i)
}