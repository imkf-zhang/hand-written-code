// this 永远指向最后调用它的那个对象

// 一个函数   一个函数的属性也是函数
// 那么在这个函数的属性函数上，打印this  打印得到的就是这个函数本身。 

function show(...args) {
  console.log(args);
  
}
show.namee = "ls"
show.sx = function() {
  console.log(this) // [Function: show] { namee: 'ls', sx: [Function] }
  console.log(this.namee) // ls
  console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3 }
}
show.sx(1,2,3)
