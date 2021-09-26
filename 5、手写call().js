// this 永远指向最后调用它的那个对象

// call()、 apply()、 bind() 这三个方法都是函数调用的，并且都有更改this指向的作用

// call做了那些事？
// 1、 改变this指向方向（arguments[0]是this想要指向的对象）
// 2、 执行函数（arguments之后的参数全部都是参数）



// 对象冒充法
Function.prototype.myCall = function (context) {
    // 是否为函数调用
    if(typeof this !== 'function') {
        console.error("type error")
    }
    // 想要this指向的地方是假值的时候，应该将其改为window
    if(context === null || context === undefined) {
        context = window
    }
    // 获取参数
    let args = [...arguments].slice(1)
    // 定义一个结果返回值
    let res = null
    // 1、将调用函数设为对象的属性方法
    context.fn = this  // 为对象定义一个fn属性,接收这个方法
    // 2、执行函数
    res = context.fn(args); // 谁调用this指向谁
    // 3、删除属性
    delete context.fn
    return res
}

let obj = {
    name: '刘德华',
    say: function() {
        console.log(this.name)
    }
}
let obj2 = {
    name: '张学友',
    say: function() {
        console.log(this.name)
    }
}

obj2.say.myCall(obj)  // 刘德华