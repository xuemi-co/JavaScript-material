// alert('hi')
let someA = '我'
const someB = '好'
var someC = '帥'
console.log('global scope',someA,someB,someC)

function funcScope(){
    let someA = 1
    const someB = 2
    var someC = 3
    console.log('function scope',someA,someB,someC)
}
funcScope()
console.log('function 執行過後的global scope',someA,someB,someC)

// if/else過後，Global的a,b沒變、但c被改變
if(true){
    let someA = '吃'
    const someB = '青'
    var someC = '菜'
    console.log('if/else (block scope)',someA,someB,someC)   
}
console.log('if/else (block scope) 執行過後的global scope',someA,someB,someC)


// 迴圈過後，Global的a沒變、但c被改變
for(let someA=0;someA<6;someA++){
    console.log('迴圈內的someA:' + someA)
}
console.log('for loop 使用 let 宣告的someA (block scope) 執行過後的global scope',someA,someB,someC)

for(var someC=0;someC<6;someC++){
    console.log('迴圈內的someC:' + someC)
}
console.log('for loop 使用 var 宣告的someC (block scope) 執行過後的global scope',someA,someB,someC)
