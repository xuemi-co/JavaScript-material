let value
// 基本數學運算
const num1 = 90
const num2 = 10

value = 90 + 10
value = num1 + num2
value = num1 - num2
value = num1 * num2
value = num1 / num2
value = num1 % num2
// 幫助我們進行更多的運算Math 物件
value = Math.PI
value = Math.E
// 無條件進位 ceil天花板
value = Math.ceil(3.3)
// 無條件捨去 floor地板
value = Math.floor(3.7)
// 四捨五入
value = Math.round(3.3)
value = Math.round(3.7)
// 取絕對值
value = Math.abs(-100)
// 找最大值
value = Math.max(2,3,4,5)
value = Math.max(102,3,-1,1000,99,5,)
value = Math.min(102,3,-1,1000,99,5,)
// 取對數 以2為底
value = Math.log2(8)
// 取對數 以10為底
value = Math.log10(10000)
// X 的 Ｙ 次方
value = Math.pow(2,3)
value = Math.pow(8,13)
// 開根號
value = Math.sqrt(81)
// 亂數0~1
value = Math.random()
// 亂數0~1000
value = Math.floor(Math.random()*1000)
// 亂數2~1002
value = Math.floor(Math.random()*1000+2)
console.log(value)