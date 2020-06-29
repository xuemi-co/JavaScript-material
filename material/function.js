// Function Statement
// 把一系列複雜的事情打包起來
// 宣告一個function，然後執行它
// 如同變數一樣，你需要進行宣告，跟記憶體要個空間儲存未來要執行的function，等時機到了你再執行它，語法如下：
// function 你得func名稱 (要傳給func使用的參數){
//  裡面要執行得事情   
// }


// 為什麼要有參數？
function greeting(){
    console.log(`Hi`)
}
function greeting(name){
    console.log(`Hi ${name}`)
}
// greeting('Ken')
// greeting('Dennis')
// greeting('Michael')
// greeting('Ye')
// greeting('承良')

// 今天如果你想改變打招呼的方式呢？(從Hi 變成 Hello)
// 直接使用console.log你就要下去改每行console.log指令，但寫在function裡面，你就只要改一次
// Function 可重複使用、可維護、可擴展

// 除了印出結果之外呢？如果我們想要比這個結果取出的話該怎麼辦？
// 我們可以使用return這個值，返回我們函式內的一個結果
// 就像是1+1 電腦回傳我們一個2，我們在square 加上return之後，這個也能回傳我們一個結果
// console.log(1+1)
function square(x) {
    // x*x
    // console.log(x*x)
    return x*x
}

// square(1) // 32行印出1
// square(2) // 32行印出4
// square(3) // 32行印出9
// square(4) // 32行印出16

// 如果我們註解掉33行，原本執行到44行之後，函式會回傳我們undefined，因為我們的計算只有停留在32行內部
// 但34行加上return之後會回傳我們一個結果，就像是我們的1+1這個運算式會回傳我們2，一樣
console.log(square(4))


// 因此我們也能將這個回傳的結果存進去我們的變數
// let area = square(4)
// console.log(area)



// 需要帶入參數的function，忘了帶怎麼辦？
function add (x,y) {
    // 防呆，傳統會在裡面給定預設值
    x = (typeof x === 'number') ?  x : 1
    y = (typeof y === 'number') ?  y : 1
    return x+y
}
// 當代寫法，參數可放入預設值，但仍有型別運算的危機要注意，比如add2(true,'1')
function add2 (x=1,y=1) {
    return x+y
}
console.log(add(),add2())



// 變數可以直接裝進一個函式嗎？yes 
// Function expression
// 如同
// 運算式Expressions 指的是輸入後能夠直接回傳值的一串程式（a unit of code that results in a value）
// ref:https://pjchender.blogspot.com/2016/03/javascriptfunction-statements-and.html
// let add3 = function(x=1,y=1) {
//     return x+y
// }
// console.log(add3,add3())

// 當代寫法 箭頭函式
// let add3 = (x=1,y=1) => {
//     return x+y
// }

// 再更簡化，如果你確定是要return 一個東西，你可以省略 { return }
let add3 = (x=1,y=1) => x+y
// 如果你只吃一個參數，你還可以省略()小括號
let mutipleTen = x => x*10


// 物件裡面也可以放入自己獨特的function嗎？yes，物件裡面的function叫做method(方法)
// let employee = {
//     name:'Kem',
//     greeting: function() {
//         console.log('Hello')
//     }
// }

// 也可縮寫如下
// employee = {
//     name:'Kem',
//     greeting() { console.log("Hello")}
// }

// console.log(employee.greeting())



// 函式可以傳入一個函式嗎？yes
function OutterFn(inner){
    // inner('Hi')
    // 先執行1+1並把結果丟給inner執行
    let x = 1+1
    inner(x)
}
// OutterFn(console.log)

// 這種概念我們叫做callback，我們希望某件事先執行完成，再執行其他事
// 雖然程式碼，是由上面執行下來，但有些程式碼會跳出這個順序( Event queue )
// 比如計時器、等待滑鼠點擊或者跟伺服器請求資料
// 詳細等我們講到callback function的部分再繼續
