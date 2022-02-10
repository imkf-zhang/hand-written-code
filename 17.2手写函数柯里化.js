function curry(fn) {
  // 保存预置参数
  var presetArgs = [].slice.call(arguments, 1);
  // 返回一个新函数
  return function () {
    // 新函数调用时会继续传参
    var restArgs = [].slice.call(arguments);
    // 参数合并，通过apply调用原函数
    return fn.apply(this, [...presetArgs, ...restArgs]);
  };
}
function test(a,b,c) {
   console.log(a+b+c)
}

curry(test,1,2,3)()