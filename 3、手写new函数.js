// 说说js中的类的发展：
//  初期：工厂函数  弊端：函数识别问题  解决： 构造函数
function factory(name, sex) {
  var obj = {};
  obj.name = name;
  obj.sex = sex;
  return obj;
}

// 然后: 构造函数  弊端：创建不同对象其中属性和方法都会重复建立  解决：原型链
function Personn (name,sex) {
  this.name = name
}
Personn.prototype.say = function() {
  console.log(this)
  console.log(this.name)
}
const zkf = new Personn("SSS","男")
zkf.say()

// 再其次就是es6语法的诞生了
class Personnn {
  constructor(name,sex) {
    this.name = name;
    this.sex = sex;
  }
  say() {
    console.log(this)
  }
}

const zkff = new Personnn("ZHANGKAIFAN","MAN")
zkff.say()

// new 干了啥？ 无非就是产生一个实例,执行构造函数（会发现构造函数执行完之后，this绑定的属性都会在实例对象上），将构造函数的this指向新的实例对象，原型上的方法也可以用-修改新对象的原型链
function myNEW (ctx,argument) {
  let obj = {};
  ctx.call(obj,argument)
  obj.__proto__ = ctx.prototype
  return obj
}

const p = myNEW(Personn,"KKKK")
p.say()


// new 函数干了什么？
// 1.在函数体内创建一个空对象
// 2.将上一步的空对象作为函数的this对象
// 3.建立继承关系this._ proto__ = fn. prototype     第2和第3其实就是实现继承
// 4.执行函数体代码
// 5.如果明确指定返回值是引用类型的值，那么返回这个值;否则(没有指定返回值或者指定一个基本类型的值)返回this

function myNew() {
  // 1.在函数体内创建一个空对象
  let newObj = null;
  // 获取到构造函数
  let constructor = Array.prototype.shift.call(arguments); //shift移除数组第一项  返回删除的第一项   并且改变原数组，原数组将没有第一项； arguments是类数组所以使用call
  let result = null;
  // 第一项不是函数还玩个锤子，直接不用进行了
  if ((typeof constructor) !== "function") {
    console.error("传入的不是一个函数",typeof constructor);
    return;
  }
  // 2.将上一步的空对象作为函数的this对象  翻译过来就是：对象的原型为构造函数的 prototype 对象
  newObj = Object.create(constructor.prototype); // 这才能实现继承呀，就可以继承到构造函数的一些公用方法，参考：2、手写Object.create()
  // 3、this指向新建对象，并执行函数
  result = constructor.apply(newObj,arguments); // 其实就是工厂函数那一步了，进行一个私有属性的处理
  // 返回
  let flag = result && (typeof result === "object" || (typeof result) === "function");  // FIXME:需要判断是不是函数我也比较疑惑，按照道理来说Object.create()返回的是一个对象 
  return flag ? result : newObj;
}



function Person(name,sex) {
  this.name = name;
  this.sex = sex;
}
var ldh = myNew(Person,'刘德华','男')

console.log(ldh)  // 明明33行没有返回但是怎么就又返回了呢？ 哈哈，Objectwx.creat()可是有返回值的呀,这个时候newOBject已经是一个构造函数的实例了，只不过是空的


// var zxy = Person('张学友','男')
// console.log(zxy)


