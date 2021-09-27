// 节流函数： 规定时间内，只能有一次触发事件的回调函数执行。单位时间内触发了多次，但是只有一次有效

// 使用时间戳来实现
function throttle (fn,delay) {
    let currTime = Date.now();
    return function() {
        let context = this;
        let args = arguments;
        let nowTime = Date.now();
        if(nowTime - currTime >= delay) {
            currTime = Date.now();
            fn.applay(context,args);
        }
    }
}

// 使用timeout 

function throttle (fn,delay) {
    let context,args,timer;
    return function () {
        context = this;
        args = arguments;
        if( !timer) {
            timer = setTimeout(()=>{
                timer = null;
                fn.applay(context,args);
            },delay)
        }
    }
}