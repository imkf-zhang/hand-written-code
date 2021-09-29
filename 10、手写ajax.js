// Ajax的底层原理xhr也就是xmlhttprequest

// 什么是XMLHttpRequest： 是浏览器提供的javascript对象，专门用来请求服务器上的数据资源。Jquery的ajax函数基于xhr对象封装的。

// 使用xhr发起get请求：
// 1、创建xhr对象;
// 2、调用xhr.open()，创建一个请求；
// 3、利用xhr.send()函数发送请求；
// 4、监听xhr.onreadystatechange事件

// 创建 xhr对象
let xhr = new XMLHttpRequest();
// 创建一个请求
xhr.open("GET", "http://wwww.baidu.com");
// 发送请求
xhr.send();
// 监听事件
xhr.onreadystatechange = function () {
  // 监听xhr对象的请求状态，readyState;与服务器相应状态 status；这个判断条件式固定的，请求成功时返回的数据也是固定的
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

// 再来一个 post请求
// 1、创建一个xhr对象
let xhr = new XMLHttpRequest();
// 2、调用open方法创建一个post请求，指定请求方式和请求地址
xhr.open("POST", "http://www.baidu.com");
// 3、设置Content-Type属性(固定写法)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//4、调用send(),同时将数据以查询字符串的形式，提交服务器
xhr.send("bookname=水浒传&author=施耐庵&piblisher=人民日报");
//5、监听onreadystatechange事件
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
// 6、设置请求失败时的监听函数
xhr.onerror = function() {
    console.log(this.statusText)
}
