// 万物皆对象
let a = "abc", b = 8, c = true, d = null, e = undefined, f = [], f1 = [1,2,5], g = {} ,g1 = {sex: 'nan'}, h = function() {console.loh('hi')},i = new Date()

console.log(typeof a ) // string
console.log(typeof b ) // number
console.log(typeof c ) // boolean
console.log(typeof d ) // object
console.log(typeof e ) // undefined
console.log(typeof f ) // object
console.log(typeof f1 ) // object
console.log(typeof g ) // object
console.log(typeof g1 )  // object
console.log(typeof h ) // function
console.log(typeof i ) // object
console.log(typeof NaN ) // number

// 其余的的正则，时间或者啥的 typeof检测出来都是object
// typeof 可以检测出来是function,还是string、number、boolean、undifined

// nstanceof 是用来判断 A 是否为 B 的实例对，
// 表达式为：A instanceof B，如果A是B的实例，则返回true,
// 否则返回false。 在这里需要特别注意的是：instanceof检测的是原型
console.log( a  instanceof String ) //false
console.log( b  instanceof Number ) //false
console.log( c  instanceof Boolean) //false
console.log( d  instanceof Object) //false

console.log( f  instanceof Array ) //true
console.log( f1 instanceof Array)  //true
console.log( g  instanceof Object) //true
console.log( g1 instanceof Object )  //true
console.log( h  instanceof Function) //true
console.log( i  instanceof Date) //true

// 最无敌的办法就是
console.log(Object.prototype.toString.call('')) //[object String]
console.log(Object.prototype.toString.call(3)) //[object Number]
console.log(Object.prototype.toString.call(false)) //[object Boolean]
console.log(Object.prototype.toString.call(null)) //[object Null]
console.log(Object.prototype.toString.call(NaN)) //[object Number]
console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
console.log(Object.prototype.toString.call([])) //[object Array]
console.log(Object.prototype.toString.call({})) //[object Object]
console.log(Object.prototype.toString.call(new Function())) //[object Function]
console.log(Object.prototype.toString.call(new Date())) //[object Date]
console.log(Object.prototype.toString.call(new RegExp())) //[object RegExp]
console.log(Object.prototype.toString.call(new Error())) //[object Error]

console.log( typeof Object.prototype.toString.call(new Error()) ) // string

let str = "abc"
console.log(str.split('')) // ['a', 'b', 'c']


function getType(val) {
    if(typeof val === 'function' ) {
        return 'function'
    } else if (typeof val === 'object') {
       let valClass = Object.prototype.toString.call(val),
       type = valClass.split(" ")[1].split('');
       type.pop();
       return type.join('').toLowerCase()
    }else {
        return typeof val
    }
} 
console.log(getType([])) //array

