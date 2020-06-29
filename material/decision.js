// 假如某個情況，就做什麼
// if(條件) {
//   做些事情
// } else {
//   做其他事情
// } 

const isLoggedIn = true
let userName = 'Ken'
let greeting = 'Hi!'
if(isLoggedIn){
    console.log('登入狀態')
    console.log(`${greeting} ${userName}`)
} else {
    console.log('登出狀態')
}




// 辨別四季
let season
let month
month = 1
month = 4
month = 7
month = 11
month = 99
if(month == 1){
    season = '春'
    console.log(season)
} else if (month == 4) {
    season = '夏'
    console.log(season)
} else if (month == 7) {
    season = '秋'
    console.log(season)
}

if(month == 1 || month == 2 || month == 3){
    season = '春'
    console.log(season)
} else if (month == 4 || month == 5 || month == 6) {
    season = '夏'
    console.log(season)
} else if (month == 7 || month == 8 || month == 9) {
    season = '秋'
    console.log(season)
// 所以最後冬天就是放進去else嗎？
// } else {
//     season = '冬'
//     console.log(season)
// }
} else if (month == 10 || month == 11 || month == 12) {
    season = '冬'
    console.log(season)
} else {
    // 避免非預期狀況
    console.log('輸入錯誤')
}
// 未來我還要用到這個檢查四季的方法呢？難不成我還要全部重新再輸入一次嗎？
// 剛好可以帶到function，把一系列相關得任務打包
function checkSeason (month) {
    // 這裡呢? 我們要不要、能不能在創建一個season的變數呢？

    // let season
    if(month == 1 || month == 2 || month == 3){
        season = '春'
        console.log(season)
    } else if (month == 4 || month == 5 || month == 6) {
        season = '夏'
        console.log(season)
    } else if (month == 7 || month == 8 || month == 9) {
        season = '秋'
        console.log(season)
    } else if (month == 10 || month == 11 || month == 12) {
        season = '冬'
        console.log(season)
    } else {
        // 避免非預期狀況
        console.log('輸入錯誤')
    } 
}
checkSeason(1)
checkSeason(7)
checkSeason(9)
checkSeason(12)

// 但是有另外一個更好的寫法switch
season = 'zzzz'
console.log(season)
// switch()



// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
  } else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
  } else {
    console.log(`${name} is an adult`);
  }
if(age > 0 && age < 12){
    console.log(`兒童`)
  } else if(age >= 12 && age < 18){
    console.log(`青年`)
  } else {
    console.log(`成年`)
  }
  
  // Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }
  // OR ||
  if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
  } else {
    console.log(`${name} is registered for the race`);
  }
  
  // TERNARY OPERATOR
  console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
  
  // WITHOUT BRACES
  if(id === 100)
    console.log('CORRECT');
  else
    console.log('INCORRECT');
  
  if(id === 100)
    console.log('CORRECT');
  else
    console.log('INCORRECT');

let day;

switch(new Date().getDay()){
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

console.log(`Today is ${day}`)