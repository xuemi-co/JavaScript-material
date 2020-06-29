const firstName = 'Ken'
const lastName = 'Chen'

let value
// 串接
value = firstName + lastName
// value = firstName + ' ' + lastName

// 附上
value = firstName
value += lastName

const depart = 'RD'
const role = '前端工程師'
value = 'Hi 我是新進的'+ role +'，我叫' + firstName + '，我隸屬於' + depart + '部門'
value = 'I\'m 18 years old'
// 今天伺服器給我什麼人的資料，我就可以用什麼人打招呼

// 如果今天文字很長一串，電腦看得懂但是我人類想要自己分行看
// value = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum similique ea cum nesciunt. Dignissimos delectus possimus aspernatur voluptatum repellendus! Laboriosam sunt dignissimos architecto molestias accusantium provident quam ab et deleniti illo non quisquam commodi tempore, fugit deserunt necessitatibus nobis voluptas rerum magnam! Dignissimos perspiciatis impedit libero. Ipsam obcaecati possimus ipsa mollitia tenetur impedit nesciunt natus officia dignissimos accusantium laudantium, nam vero saepe pariatur laborum praesentium voluptas totam eaque. Voluptates amet animi quia corrupti commodi aperiam non nostrum eligendi odit exercitationem, fuga perferendis obcaecati, neque nihil consequuntur laborum, illo cupiditate. Explicabo laborum obcaecati ipsum, cum impedit, cupiditate provident consequatur placeat nam voluptatem eos consequuntur. Aspernatur temporibus est dolore pariatur aliquam, fuga dolorum corporis voluptatum? Vero ducimus non aut perspiciatis ipsam, quo quasi debitis enim impedit, voluptatibus unde? Beatae eius explicabo optio odit quaerat assumenda amet officiis, incidunt dolorem quod? Vitae aperiam perspiciatis fugit saepe dolorum mollitia unde doloribus alias doloremque iste animi facere, quam, eligendi quas! Magnam eaque vero accusamus corrupti unde aliquid mollitia! Impedit praesentium adipisci, sed corrupti molestias molestiae omnis ex optio delectus quis fugit consectetur ea harum, voluptates vitae inventore qui reiciendis. Numquam qui ad excepturi, similique quisquam perspiciatis repellendus! Qui non dolorem exercitationem nesciunt sequi delectus.'
value = 'Lorem,\n \
 ipsum dolor sit amet \
consectetur adipisicing elit. Praesentium \
nostrum similique ea cum nesciunt. Dignissimos\
 delectus possimus aspernatur voluptatum repellendus! Laboriosam sunt dignissimos architecto molestias accusantium provident quam ab et deleniti illo non quisquam commodi tempore, fugit deserunt necessitatibus nobis voluptas rerum magnam! Dignissimos perspiciatis impedit libero. Ipsam obcaecati possimus ipsa mollitia tenetur impedit nesciunt natus officia dignissimos accusantium laudantium, nam vero saepe pariatur laborum praesentium voluptas totam eaque. Voluptates amet animi quia corrupti commodi aperiam non nostrum eligendi odit exercitationem, fuga perferendis obcaecati, neque nihil consequuntur laborum, illo cupiditate. Explicabo laborum obcaecati ipsum, cum impedit, cupiditate provident consequatur placeat nam voluptatem eos consequuntur. Aspernatur temporibus est dolore pariatur aliquam, fuga dolorum corporis voluptatum? Vero ducimus non aut perspiciatis ipsam, quo quasi debitis enim impedit, voluptatibus unde? Beatae eius explicabo optio odit quaerat assumenda amet officiis, incidunt dolorem quod? Vitae aperiam perspiciatis fugit saepe dolorum mollitia unde doloribus alias doloremque iste animi facere, quam, eligendi quas! Magnam eaque vero accusamus corrupti unde aliquid mollitia! Impedit praesentium adipisci, sed corrupti molestias molestiae omnis ex optio delectus quis fugit consectetur ea harum, voluptates vitae inventore qui reiciendis. Numquam qui ad excepturi, similique quisquam perspiciatis repellendus! Qui non dolorem exercitationem nesciunt sequi delectus.'

value = firstName.length

value = firstName.concat(' ', lastName, '!!!')


// 改變大小寫
value = firstName.toUpperCase()
value = firstName.toLowerCase()

value = firstName[2]

// indexOf()某個字 在第幾個位置
value = firstName.indexOf('e')
let fruit = 'apple'
value = fruit.lastIndexOf('n')
value = fruit.lastIndexOf('p')

// charAt()某個位置的字 是什麼
value = firstName.charAt('1')
// 最後一個字
value = firstName.charAt(firstName.length - 1)

const name = 'Anastasia'
// substring()
value = name.substring(1, 3)

// slice() 切割單字
value = name.slice(0,4)
value = name.slice(-3)

// split() 切割字串 回傳 array
const greeting = 'Hi Ken! Welcome to Web Lab'
value = greeting.split(' ')
const tags = 'event, campaign, conference'
value = tags.split(',')

// replace() 取代某個字
value = greeting.replace('Ken', 'John')

// includes() 回傳布林
value = greeting.includes('to')



console.log(value)
