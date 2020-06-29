let value
value = document
value = document.all
// 選到body
value = document.all[6]
value = document.body
value = document.head
value = document.doctype
value = document.URL
value = document.domain

// 先來看看footer
value = document.links
value = document.links[2]
value = document.links[2].className
document.links[2].className = 'has-text-warning'
value = document.links[2].classList
value = document.links[2].classList[0]
// classList直接改沒用
document.links[2].classList[1] = 'is-size-1'
document.links[2].classList.add('is-size-1') 
document.links[2].classList.remove('has-text-warning') 

value = document.forms
value = document.forms[0]
value = document.forms[0].id
value = document.forms[0].method
value = document.forms[0].action
value = document.forms[0].elements
// 之後可以根據狀態、改變按鈕樣式
document.forms[0].elements[3].classList.add('is-loading')

console.log(value)

// 這樣透過樹狀一層一層的選下去是不是很麻煩啊？？？如果我們想要直接選定某個DOM元素時
// 所以我們需要選擇器
