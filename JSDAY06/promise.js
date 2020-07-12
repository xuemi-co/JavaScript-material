// 延續 callback 買菜範例

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

// callback 執行方式

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

// 太多 func 變 callback hell
// 買菜(function(){洗菜(function(){切菜()})})

// const 買菜成功 = true //如果買菜成功

// const 買菜 = () => {
//     return new Promise(function(resolve, reject) {
//         if (買菜成功) {
//             setTimeout(function() {
//                 resolve('買菜完成')
//             }, 3000) // 正確完成的回傳方法
//         } else {
//             reject('買不到菜')
//         }
//     })
// }

// 買菜().then(res => console.log(res))

// const 買菜成功 = false //如果買菜失敗

// const 買菜 = () => {
//     return new Promise(function(resolve, reject) {
//         if (買菜成功) {
//             setTimeout(function() {
//                 resolve('買菜完成')
//             }, 3000) // 正確完成的回傳方法
//         } else {
//             reject('買不到菜')
//         }
//     })
// }

// 買菜()
//     .then(res => console.log(res))
//     .catch(error => console.log(error))
