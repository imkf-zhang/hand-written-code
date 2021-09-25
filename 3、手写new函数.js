// 说说js中的类的发展：
//  初期：工厂函数  弊端：函数识别问题  解决： 构造函数
function factory(name, sex) {
  var obj = {};
  obj.name = name;
  obj.sex = sex;
  return obj;
}
// 然后: 构造函数  弊端：创建不同对象其中属性和方法都会重复建立  解决：原型链

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
  let constructor = Array.prototype.shift(arguments); //shift移除数组第一项  返回删除的第一项   并且改变原数组，原数组将没有第一项
  // 第一项不是函数还玩个锤子，直接不用进行了
  if (typeof constructor !== "function") {
      console.error("传入的不是一个函数");
      return;
  };
  // 2.将上一步的空对象作为函数的this对象  翻译过来就是：对象的原型为构造函数的 prototype 对象
  newObj =  Object.create(constructor.prototype)   // 这才能实现继承呀，参考：2、手写Object.create()
  
}
