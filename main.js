// const basket = ['apples', 'grapes', 'pears']

// 链表：apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null


//指针
const obj1 = { a: true }
const obj2 = obj1
obj1.a = 'hello'
delete obj1
// console.log('1', obj1)
console.log('2', obj2)
