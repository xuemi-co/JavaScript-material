const employee = {
    firstName: 'Ken',
    lastName: 'Chen',
    position: '前端工程師',
    age: 18,
    skills: ['JavaScript', 'React', 'PhotoShop'],
    address: {
      city: '台北',
      district: '信義',
      postCode: '102'
    }
  }
  
  let value
  // 取得物件內特定的值
  
  value = employee
  value = employee.firstName
  value = employee['lastName']
  value = employee.age
  value = employee.skills
  value = employee.skills[1]
  value = employee.address.district
  value = employee.address['city']
  
  console.log(value)
  
  const myFriends = [
    {name: 'KK', astrologicalSign: '雙魚'},
    {name: 'Johney', astrologicalSign: '射手'},
    {name: 'Alex', astrologicalSign: '牡羊'}
  ]
//   console.log(myFriends)
  
