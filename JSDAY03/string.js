// alert("Hi from string js")
const firstName = 'Ken'
const lastName = 'Chen'

let value
// 串接
value = firstName + lastName
value = firstName + ' ' +lastName

value = firstName
value += lastName

const depart = 'RD'
const position = '前端工程師' 
// value = 
// Hi 我是新進的前端工程師，我叫Ken 
// Chen，我隸屬於RD部門
value = 'Hi 我是新進的' + position + '，我叫' + firstName + ' ' + lastName + '，我隸屬於'+ depart + '部門'
// ES6 String literal
value2 =`Hi 我是新進的${position}，我叫${firstName} ${lastName}，我隸屬於${depart}部門`
// 特殊字元
value = 'Hi I\'m Ken'
value = 'Lorem ipsu\
m dolor sit amet \
consectetur adipisicing elit. Neque, \
explicabo? Autem beatae dicta, illo n'
value ='Hi \n我是新進的前端工程師，我\n叫Ken' 

value = firstName.length
value = '你好!!!'.length

value = firstName.concat(' ',lastName,'!!!')

value = firstName.toUpperCase()
value = firstName.toLowerCase()
value = firstName[1]

// indexOf 某個字 在第幾個位置
value = firstName.indexOf('n')
const fruit = 'apple'
value = fruit.indexOf('n')
value = fruit.indexOf('p')
value = fruit.lastIndexOf('p')
// 在第1號位置的是什麼字
value = firstName.charAt(1)
value = firstName[1]
// 取最後一個字
value = firstName.charAt(firstName.length - 1 )

const name = 'Anastasia'

// 子字串
value = name.substring(1,4)

// 切割單字
value = name.slice(0,4)
value = name.slice(-1)
value = name.slice(-3)
value = name.slice(-5)

// 切割字串 回傳Array
const greeting = 'Hi Ken! Welcome to Web Lab'
value = greeting.split(' ')
const tags = 'events,campaign,conference'
value = tags.split(',')
value = greeting.replace('Ken', 'John')
value = greeting.includes('Web Lab')
value = greeting.includes('Web')
value = greeting.includes('Web2')
console.log(value)
// console.log(value2)