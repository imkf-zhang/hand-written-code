function Person () {
    console.log(this)
}

let person =  new Person()   // Person {}

console.log(typeof null === 'object')  // true



let newObj = {}
function constru(name,sex) {
    this.name = name;
    this.sex = sex;
}

constru.call(newObj,"kf","男")
console.log(newObj)  // { name: 'kf', sex: '男' }