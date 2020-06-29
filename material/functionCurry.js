// 還記得上個章節的範例嗎？
function add2 (x=1,y=1) {
    return x+y
}
// 跟上面的add2不一樣，add2是一個function傳入兩個參數，我們add4是吃一個參數回傳一個function，這function又吃另外一個參數
// Currying（柯里化），又稱為 parital application 或 partial evaluation，是個「將一個接受 n 個參數的 function，轉變成 n 個只接受一個參數的 function」的過程。
// ref: https://cythilya.github.io/2017/02/27/currying-in-javascript/ 
let add4 = function(x){
    return function(y){
        return x+y
    }
}
console.log(add4(2)(3))
// 如此我們便能組合出以下的function
let addFive = add4(5)
let addEleven = add4(11)
console.log(addFive(9))
console.log(addEleven(9))