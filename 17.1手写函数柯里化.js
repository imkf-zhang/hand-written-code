// 柯里化的定义:
// 接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。

// 柯里化实际是把简答的问题复杂化了，但是复杂化的同时，我们在使用函数时拥有了更加多的自由度。 
// 而这里对于函数参数的自由处理，正是柯里化的核心所在。 

// 柯里化本质上是降低通用性，提高适用性。



// 理解柯里化demo:
// 我们工作中会遇到各种需要通过正则检验的需求，比如校验电话号码、校验邮箱、校验身份证号、校验密码等，
// 这时我们会封装一个通用函数 checkByRegExp ,接收两个参数，校验的正则对象和待校验的字符串
function checkByRegExp(regExp,string) {
    return regExp.test(string);  
}

checkByRegExp(/^1\d{10}$/, '18642838455'); // 校验电话号码
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com'); // 校验邮箱
// 复制代码上面这段代码，乍一看没什么问题，可以满足我们所有通过正则检验的需求。
// 但是我们考虑这样一个问题，如果我们需要校验多个电话号码或者校验多个邮箱呢？
// 我们可能会这样做：
checkByRegExp(/^1\d{10}$/, '18642838455'); // 校验电话号码
checkByRegExp(/^1\d{10}$/, '13109840560'); // 校验电话号码
checkByRegExp(/^1\d{10}$/, '13204061212'); // 校验电话号码

checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com'); // 校验邮箱
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@qq.com'); // 校验邮箱
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@gmail.com'); // 校验邮箱
// 复制代码我们每次进行校验的时候都需要输入一串正则，再校验同一类型的数据时，相同的正则我们需要写多次，
// 这就导致我们在使用的时候效率低下，并且由于 checkByRegExp 函数本身是一个工具函数并没有任何意义，
// 一段时间后我们重新来看这些代码时，如果没有注释，我们必须通过检查正则的内容，
// 我们才能知道我们校验的是电话号码还是邮箱，还是别的什么。
// 此时，我们可以借助柯里化对 checkByRegExp 函数进行封装，以简化代码书写，提高代码可读性。
//进行柯里化
let _check = curry(checkByRegExp);
//生成工具函数，验证电话号码
let checkCellPhone = _check(/^1\d{10}$/);
//生成工具函数，验证邮箱
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

checkCellPhone('18642838455'); // 校验电话号码
checkCellPhone('13109840560'); // 校验电话号码
checkCellPhone('13204061212'); // 校验电话号码

checkEmail('test@163.com'); // 校验邮箱
checkEmail('test@qq.com'); // 校验邮箱
checkEmail('test@gmail.com'); // 校验邮箱
// 复制代码再来看看通过柯里化封装后，我们的代码是不是变得又简洁又直观了呢。
// 经过柯里化后，我们生成了两个函数 checkCellPhone 和 checkEmail，
// checkCellPhone 函数只能验证传入的字符串是否是电话号码，
// checkEmail 函数只能验证传入的字符串是否是邮箱，
// 它们与 原函数 checkByRegExp 相比，从功能上通用性降低了，但适用性提升了。
// 柯里化的这种用途可以被理解为：参数复用
