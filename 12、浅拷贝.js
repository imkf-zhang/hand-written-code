// 浅拷贝是指：
// 一个新的对象对原始对象的属性值进行精确地拷贝，
// 如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值，
// 如果是引用数据类型，拷贝的就是内存地址。
// 如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。

// 实现浅拷贝的方法可太多了，详情请关注(https://blog.csdn.net/weixin_43131046/article/details/109648515)
// 以下介绍几种主流的

// Object.assign()

// Object.assign()是ES6中对象的拷贝方法，
// 接受的第一个参数是目标对象，其余参数是源对象，
// 用法：Object.assign(target, source_1, ···)，
// 该方法可以实现浅拷贝，也可以实现一维对象的深拷贝。
// 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。
// 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。
// 因为null 和 undefined 不能转化为对象，所以第一个参数不能为null或 undefined，会报错

// 扩展运算符
// 使用扩展运算符可以在构造字面量对象的时候，进行属性的拷贝。
// 语法：let cloneObj = { ...obj };

let obj1 = { a: 1, b: { c: 1 } };
let obj2 = { ...obj1 };
obj1.a = 2;
console.log(obj1); //{a:2,b:{c:1}}
console.log(obj2); //{a:1,b:{c:1}}
obj1.b.c = 2;
console.log(obj1); //{a:2,b:{c:2}}
console.log(obj2); //{a:1,b:{c:2}}

// 数组方法实现数组浅拷贝 以下两种方法：都不影响原数组，会产生新的数组

// Array.prototype.slice

// - slice()方法是JavaScript数组的一个方法，这个方法可以从已有数组中返回选定的元素：用法：array.slice(start, end)，该方法不会改变原始数组。
// - 该方法有两个参数，两个参数都可选，如果两个参数都不写，就可以实现一个数组的浅拷贝。

let arr = [1, 2, 3, 4];
console.log(arr.slice()); // [1,2,3,4]
console.log(arr.slice() === arr); //false

// Array.prototype.concat
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
// 该方法有两个参数，两个参数都可选，如果两个参数都不写，就可以实现一个数组的浅拷贝。

// let arr = [1, 2, 3, 4];
console.log(arr.concat()); // [1,2,3,4]
console.log(arr.concat() === arr); //false


// hasOwnProperty() 方法会返回一个布尔值，
// 指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

function shallCopy (obj) {
    // 排除 空值
    if (!obj || typeof obj !== 'object') {
        return
    }
    // 创建一个返回对象，如果是数组，就创建一个空数组，如果是对象就创建一个空对象
    let newObj = Array.isArray(object) ? [] : {};

    // 遍历obj，并且是obj的属性才拷贝
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    } 
    return newObj
}


console.log(arr.hasOwnProperty(0)) // true
console.log(arr.hasOwnProperty(4)) // false

console.log(![]) // false
console.log(!{}) // false
