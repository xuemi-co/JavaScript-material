// alert('你好')

// 作業檢討
const Dennis = {
    name:'Dennis',
    male:true,
    rr:'PM',
    salary:81000,
    company:'Ulink',
    travel:true,
    skill:['溝通','專案管理','幫工程師買宵夜']
}
// 取得物件當中某個屬性的值
console.log('Dennis',Dennis.skill[0])

// console.log({
//     name:'Peter',
//     birtday:'1990/01/19',
//     id:'a123456789',
//     phonenumber:'0912345678',
//     department:'sales',
//     salary:100000,
//     hasOversea:true,
//     skill:['溝通','設計']  //建議用skills
// })

// console.log({
//     name:'Dave',
//     birthday:'18970204',
//     id:'a123123123',
//     number:'091010101010', //number的意思太多了，phoneNumber可以更明確
//     // 思考如何存一個區間的值
//     // salaryrange:{min:9000,90000}
// })

// console.log({
//     mydrink:"beer",
//     myfood:"Hamburger",
//     mypeople:10,
//     today:"Monday"
// })


// console.log({
//     name:'Denis',
//     male:true,  //記得思考未來會怎麼使用這個值，如果製作的網頁是性別友善的就不會單純只有male跟female兩種選擇，而且以male的true作為規格設計，你的女性工程師同仁看到可能會怎麼想？
//     rr:'PM', //如果要使用特殊符號作為object的key要注意比如不能是r&r:'PM', 而是要'r&r':'PM',
//     salary:81000,
//     company:'Ulink',
//     travel:true,
//     skill:['溝通','專案管理','幫工程師買宵夜']  //  建議用skills
// })

// 作業檢討
// 命名得重要性
// 注意非法字元、保留字
// 思考資料怎麼儲存
// 語法的格式 {}[]()用哪一個，取得物件的裡面某個屬性的值用.而不是,
// 程式碼風格 字串統一都用''或是""，排版縮排是空白2格或4格




// 什麼是變數？把值存進某個地方未來可以使用
// const 必須在宣告時就給定一個值，並且未來不可改變
// const firstname // 沒有給值會噴錯
const firstname = 'YM'
// let 不用在宣告時就給定一個值，並且未來可以改變
let lastname
console.log(firstname,lastname)
// let 可以先宣告，再給值，只是變數還沒給值就使用時，會出現undefined
lastname = 'Chen'
console.log(firstname,lastname)

// 還可以更換變數裡面儲存的值
lastname = 'Chu'
console.log(firstname,lastname)

// 修改const裡面的值會噴錯
// firstname = 'Ken'

// 程式碼中間的空格不會影響這個變數名稱，但是字串會
// lastname      =      'Ch  en'
// console.log(firstname,lastname)

// 思考哪些東西希望被作為常數儲存，未來不希望再被更改
// pi？ 3.14? 3.1415? 3.1416? 
// 薪水？





// 非法的命名
// let first name // 中間不可空白
// let 1name  // 不可數字開頭
// let @name  // 非法字元
// let case   // 保留字

// 合法的命名
// let car   // 一般不是保留字的英文單字
// let 中文  // 合法但實務上不常使用
// let name1 // 數字可以加在後面
// let _name // 前面可以有底線
// let $name // 儲存某個jQuery的物件常用的方式

// 多個單字作為變數名稱
// let firstname = 'a'
// let firstName = 'b' // 駝峰式前端工程師常用的命名方式 
// let first_name ='b' // 後端工程師php, python常用的命名方式
// let FirstName = 'd'
// var THIS_IS_A_CONST = 'g' // 過去沒有const時，常數習慣命名的方式
// console.log(firstname,firstName,first_name,FirstName,THIS_IS_A_CONST)


// 所以上面範例的命名(firstname,lastname)建議改成用firstName、lastName
// let firstName
// let lastName
// firstName = 'Peter'
// console.log(firstName,lastName)