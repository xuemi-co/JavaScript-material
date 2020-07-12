// 複習
// 函式可以傳入一個函式嗎？yes
// function OutterFn(inner){
//     inner('Hi')
//     先執行1+1並把結果丟給inner執行
//     let x = 1+1
//     inner(x)
// }
// OutterFn(console.log)
// 這種概念我們叫做callback，我們希望某件事先執行完成，再執行其他事
// 雖然程式碼，是由上面執行下來，但有些程式碼會跳出這個順序( Event queue )
// 比如計時器、等待滑鼠點擊或者跟伺服器請求資料

// 這邊跟大家介紹計時器
// setTimeout(fn,time)
// 第一個參數是時間到了之後要執行的function，第二個參數是需要倒數計時的時間（單位是毫秒，1秒===1000毫秒）
// setTimeout(() => {
    
// }, timeout)

// setTimeout(() => {
//   console.log('過了3秒，我才出現') 
// }, 3000)
// 程式碼往下執行
// console.log('我是在計時器後面的程式碼')

// 舉例我們做菜有個順序，買菜、洗菜、切菜、炒菜，每件事都需要一段時間等待
// 先來看看以下
// function 買菜(){
//     console.log('買菜中')
//     setTimeout(function(){
//         console.log('買菜完成')
//     }, 3000);
// }
// function 洗菜(){
//     console.log('洗菜中')
//     setTimeout(function(){
//         console.log('洗菜完成')
//     }, 2000)
// }
// function 切菜(){
//     console.log('切菜中')
//     setTimeout(function(){
//         console.log('切菜完成')
//     },1000)
// }
// 買菜()
// 洗菜()
// 切菜()



// function 買菜(){
//     console.log('買菜中')
//     setTimeout(function(){
//         console.log('買菜完成')
        
//         console.log('洗菜中')
//         setTimeout(function(){
//             console.log('洗菜完成')
            
//             console.log('切菜中')
//             setTimeout(function(){
//                 console.log('切菜完成')

//                 console.log('炒菜中')
//                 setTimeout(function(){
//                     console.log('炒菜完成')
                    
//                     console.log('吃飯囉')
//                     setTimeout(function(){
//                         console.log('吃飽洗碗去')        
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }


// 買菜()


// 沒有參數預設值 callback 的執行觀念

// function 買菜(cb){
//     console.log('買菜中')
//     setTimeout(function(){
//         console.log('買菜完成')
//         cb()
//     }, Math.random()*1000);
// }
// function 洗菜(cb){
//     console.log('洗菜中')
//     setTimeout(function(){
//         console.log('洗菜完成')
//         cb()
//     }, Math.random()*1000);
// }
// function 切菜(cb){
//     console.log('切菜中')
//     setTimeout(function(){
//         console.log('切菜完成')
//         cb()
//     }, Math.random()*1000);
// }
// 買菜(function(){洗菜(function(){切菜()})})



// function 買菜(cb=洗菜){
//     console.log('買菜中')
//     setTimeout(function(){
//         console.log('買菜完成')
//         cb()
//     }, Math.random()*1000);
// }
// function 洗菜(cb=切菜){
//     console.log('洗菜中')
//     setTimeout(function(){
//         console.log('洗菜完成')
//         cb()
//     }, Math.random()*1000);
// }
// function 切菜(cb=()=>{}){
//     console.log('切菜中')
//     setTimeout(function(){
//         console.log('切菜完成')
//         cb()
//     }, Math.random()*1000);
// }
// 買菜()

// 現在因為有參數預設值，所以可以這樣用
// 買菜(洗菜(切菜))，這樣子執行會錯，因為程式碼看到()就會直接先被執行了，也就是說買菜跟洗菜會被直接執行，洗菜不會等到買菜callback
