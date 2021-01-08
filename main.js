let user = {
  age: 25,
  name: 'Summer',
  sex: 'Female',
  sayHello: function () {
    console.log('大家好！')
  },
}

// console.log(user.age) O(1)
// console.log(user.name) O(1)

// user.email = 'test@example.com' O(1)
console.log(user)

//哈希碰撞的大O符号：O(n/k) --> O(n)
