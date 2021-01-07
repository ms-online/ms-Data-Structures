const strings = ['x', 'a', 'y', 'b', 'c', 'd']
//    0    1    2    3    4   5
// 4*4 =16 存储的字节

// console.log(strings[2]) //O(1)

//push
strings.push('e') //O(1)

//pop
strings.pop()
strings.pop() //O(1)

//unshift
strings.unshift('x') //O(n)

//splice
strings.splice(2, 0, 'y') //O(n)
console.log(strings)
