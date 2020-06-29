// 有了callback的觀念之後，我們也可以回到Array
let value

// 更多的Array method
// 1.find 尋找
const luckyNumbers = [2,51,56,87,239,999]
function isOverHundred(num) {
    return num > 100
}
// find會找到第一個符合條件(回傳true)的結果
value = luckyNumbers.find(isOverHundred)
// 等於以下
value = luckyNumbers.find(function(num){
    // console.log(num)
    return num > 100
})
value = luckyNumbers.find(num => num>100)
console.log(luckyNumbers,value)

// 2.filter 過濾、篩選
value = luckyNumbers.filter(isOverHundred)
// 等於以下
value = luckyNumbers.filter(num => num>100)
console.log(luckyNumbers,value)

// 3.map 映射
function double(num) {
    return num*2
}
// map把所有值傳進callback function並回傳一個新的陣列
value = luckyNumbers.map(double)
// 等於以下
value = luckyNumbers.map(num => num*2)
console.log(luckyNumbers,value)

// 4.forEach，對陣列裡的每一個值進行運算、不會回傳值，所以value會是undefined

value = luckyNumbers.forEach(function(item,index,array){
    console.log(item)
    item = item*10
    array[index]=item
    return item //沒有作用
})
console.log(luckyNumbers,value)

let sum = 0
luckyNumbers.forEach(item => sum+=item)
console.log(sum)