// applay跟call的区别就在于一个参数是正常参数，一个参数是数组
Function.prototype.myApply = function (ctx, arr) {
  if (typeof this !== "function") {
    console.log("type error");
  }
  ctx ? ctx : window;
  let res = null;
  // 冒充对象

  ctx.fn = this; // 把函数赋给对象的fn属性  this就是这个函数
  const [first, ...reset] = [...arguments]; // 获取剩余参数
  res = ctx.fn(...reset);  // 谁调用this指向谁
  delete ctx.fn;
  return res
};

let obj = {
    name: 'imkf',
    say: function(arr) {
        arr.forEach(item => {
            console.log(item)
        })
    }
}
let obj1 = {
    name: 'imkf1',
    say: function(arr) {
        arr.forEach(item => {
            console.log(item)
        })
    }
}
obj.say.myApply(obj1,[1,2,3])





// 看一看扩展运算符
var arr = [5,8,3,4]
console.log(...arr)
function fn (a,b,c,d) {
    console.log(a+b+c+d) //
}
fn(...arr)