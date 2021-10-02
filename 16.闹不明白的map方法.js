let list = [
    {
        name:'lucy'
    },
    {
        name:'jack'
    }
]
// map 其实就是遍历每一项然后返回一个新的数组，不改变原数组
let names = list.map(function(item) {
    return item.name;
  })

console.log(Array.isArray(names))  // true

console.log(list)  //[ { name: 'lucy' }, { name: 'jack' } ]
console.log(names)  //[ 'lucy', 'jack' ]
