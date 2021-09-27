// 函数防抖是指在事件触发后n秒后在执行回调，若是在这n秒内再被触发，就重新计时
// 应用：避免用户多次触发向后台频繁请求   eg:输入框的联想搜索

// 使用场景：基本都是事件触发，所以呀，必然得返回一个函数，然后处理this指向和事件对象的问题
// input.onchange = debounece(dosomething,300)

// 大部分就是返回一个函数，这个函数与事件绑定在一起
// 1、防抖搞定，
// 2、然后处理this(改变this的指向)
// 3、这是个事件函数，需要用到事件对象  // 实际上打印return的函数的arguments就会发现，其就是事件对象。===》事件函数的arguments自然就携带event  牛逼

function debounce(fn,wait) {
  let timer = null;
  // 应该是返回一个函数
  return function() {
   console.log(this); // 此处的this指向的就是调用者
   let context = this;
   let args = arguments
   if(timer) {
       clearTimeout(timer);
       timer = null;
   }
   timer = setTimeout(()=> {
       fn.applay(context,args)
   },wait);
  }
}


