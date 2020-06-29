// 創造一個Array的方法
const luckyNumbers = [56,51,28,-8,18]
const favoriteMovies = ['海街日記', '刺激1995', '教父', '穿著Prada的惡魔']
const myToyota = ['Toyota', 'Altis', 780000, false, undefined, null, {petrol:'95', year:1991}]
const primeNumbers = new Array(2,3,5,7,11,13,19)

let value

// 取得陣列長度
value = favoriteMovies.length

// 取得陣列內某個位置的值
value = favoriteMovies[3]
value = favoriteMovies[0]
value = favoriteMovies[99]
// 插入或是取代某個值進入陣列
favoriteMovies[1] = '鬥陣俱樂部'
// favoriteMovies[6] = '鋼鐵擂台' // 中間空下來的位置會...

// 找某個值所在的位置
value = favoriteMovies.indexOf('教父')

// 檢查是不是陣列
value = Array.isArray(myToyota)

// 修改Array
// // 最後面新增一個
favoriteMovies.push('教父2')
// // 拿出最後面一個
let tail = favoriteMovies.pop()
// // 最前面新增一個
favoriteMovies.unshift('鋼鐵人')
// // 拿出最前面一個
let head = favoriteMovies.shift()
// console.log(tail,head)
// // 切割陣列
// favoriteMovies.splice(1,2)
// // 反轉陣列 車廂掉頭
favoriteMovies.reverse()

// 串接
let favoriteDrama = ['鬥魚', '麻醉風暴', '痞子英雄']
value = favoriteMovies.concat(favoriteDrama)

// 陣列排序
value = favoriteMovies.sort()
value = luckyNumbers.sort()
const alphabet = ['c','b','z','a','x']
value = alphabet.sort()


console.log(favoriteMovies)
console.log(value)

// 之後會再教 forEach, splice, slice, map, filter


// 你說const得值為什麼可以被改變？
// 這裡跳回投影片
// 因為除了原始型別的值
// （數字、布林、字串、null、undefined、Symbol、bigInt)
// 之外的值，對於JavaScript而言，都是物件
// 那物件跟原始型別，存進去變數的方式不一樣
// 一個是直接丟進原始值、一個是丟進一組參考（類似地址得概念，透過那組地址我們得以尋找物件跟陣列裡面散落的各個值）
// 舉例by Kuro
const myWallet = {
    coin:10
}
const yourWallet = {
    coin:10
}
// 一樣是10塊錢，你的錢包的10元跟我的10元，是一樣的東西嗎？
myWallet === yourWallet

// 那你說錢包給老婆管、你的錢包就是老婆的錢包（把yourWallet指定給wifeWallet）
const wifeWallet = yourWallet
wifeWallet === yourWallet
wifeWallet === myWallet

// 因此我們上面做的事情，他沒有修改到這個Array的值（某個位置、地址）
// 而是透過陣列拿取某些值或是塞入某些值進去陣列