// alert('HI')
// Array
// 如何創造一個Array
const luckyNumbers = [ 56, 28, -8,18 ]
const favoriteMovies = ['海街日記', '刺激1995', '教父', '穿著Prada的惡魔']
const myToyota = ['Toyota', 'Altis', 780000, false, undefined, null, {petrol:'95', year:1991}]
const primeNumbers = new Array(2,35,67,89)
// array 方法
let value 
// 取得陣列的長度
value = favoriteMovies.length
// 取得陣列內某位置得值
value = favoriteMovies[0]
value = favoriteMovies[3]
value = favoriteMovies[99]
// 取代
favoriteMovies[1] = '鬥陣俱樂部'
// favoriteMovies[7] = '鋼鐵人'
// // 最後面新增一個
favoriteMovies.push('教父2')
// // 最前面新增一個
favoriteMovies.unshift('鋼鐵人')
const first = favoriteMovies.shift()
const last = favoriteMovies.pop()
console.log(first, last)
// 串接
let favoriteDrama = ['鬥魚', '麻醉風暴', '痞子英雄']
value = favoriteMovies.concat(favoriteDrama)
// 反轉
value = favoriteMovies.reverse()
const alphabet = ['c','a','s','z']
value = alphabet.sort()
value = luckyNumbers.sort().reverse()
console.log(value)
console.log(favoriteMovies)