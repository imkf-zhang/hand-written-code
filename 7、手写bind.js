// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 1、创建一个新的函数
// 2、新函数的 this 被指定为 bind() 的第一个参数  其余参数将作为新函数的参数，供调用时使用
// 3、返回值不变


// 实现逻辑：返回的是一个函数，而且返回值不能变，那我就这样保存住原函数，mmp的到时候再给你执行不就行了，两个return是为了保证返回值不变
// 处理this指向的问题
Function.prototype.myBind = function(ctx) {
   // 原函数
   const self = this;   
   const args = [...arguments] 
   const firstValue = args.shift() // 这不就是this指向么

   return function() {
    return self.apply(firstValue,args.concat(...arguments))
   }
}




// 先了解bind的药性：药性其实就是上述的1、2、3

function test(a,b,c) {
    console.log(a,b,c)
    console.log('this',this)
    return 'imkf'
}
// 普通执行
test()   // 全局的window

// 通过bind改变this指向 执行
test.bind({name:'kf'},7,77)(777)  // { name: 'kf' } 7 77 777   bind返回的是一个函数

test.myBind({name:'kf'},7,77)(777)