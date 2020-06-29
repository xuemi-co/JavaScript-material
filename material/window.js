let value

value = window.location
value = window.location.hostname
value = window.location.href
// 試著在url列輸入?id=123&name=ken
value = window.location.search

// 重新整理
// window.location.reload()
// 導向到其他頁
// window.location.href = 'https://stackoverflow.com/'


value = window.outerWidth
value = window.innerWidth

value = window.innerHeight
value = window.outerHeight
console.log(value)


// 沒有宣告就使用的變數
a = '我好帥'
// 使用var宣告的變數
var b = '你好'
let c = '早安'
console.log(window.a,window.b,window.c)

// 沒有宣告就使用的變數就好像是在window這個object底下直接新增某個屬性
var someObject = { } // 在瀏覽器底下的程式碼，都包含在window object
someObject.someProp = '某個屬性' 
console.log(someObject.someProp)
// 某個沒宣告的變數，就像上面，只是window可以省略，所以就是someProp = '某個屬性'

// 沒宣告的變數，被視為物件的某個屬性，可以直接用delete刪除
console.log(delete a)
console.log(delete b)
console.log(window.a,window.b)




// someLet = 6666   //let 會提醒你還沒宣告就使用，但是var...
window.someLet = 6666  //但你還是可以這樣玩
let someLet = 'Ken'
console.log(window.someLet,someLet)

// 不要再玩JS了、會壞掉ＸＤＤＤ
someVar = 6666   //let 會提醒你還沒宣告就使用，但是var有提升
// window.Var = 6666  //但你還是可以這樣玩
var someVar = 'Ken'
console.log(window.someVar,someVar)






// 時間多點可以再補充window navigator scroll scrollTo history