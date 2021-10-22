// arguments 只有在函数调用的时候才有效
// 在函数调用时， 会自动在该函数内部生成一个名为 arguments的隐藏对象。 
// 该对象类似于数组， 但又不是数组。可以使用[]操作符获取函数调用时传递的实参。

function handle(params,query) {
    console.log(arguments)  //[Arguments] { '0': 'para', '1': 'query' }
    console.log(arguments.callee)   //[Function: handle]
    console.log(arguments.length)  // 2
    console.log(params,query)  // para query
    handleOther('a','b')
} 
// length,name 属于函数的实例属性  
// caller也属于实例属性，但是他只要在一个函数被另一个函数调用的时候才出现
console.log(handle.length,handle.name)  // 2  handle

handle('para','query')

// 在一个函数调用另一个函数时，被调用函数会自动生成一个caller属性
// ，指向调用它的函数对象。如果该函数当前未被调用，
// 或并非被其他函数调用，则caller为null。
function handleOther(a,b) {
    console.log(handleOther.caller)     // [Function: handle]
}

// 当函数被调用时，它的arguments.callee对象就会指向自身，也就是一个对自己的引用。