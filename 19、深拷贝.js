function dep(obj) {
 if( typeof obj !== 'object') {
   return "请传入一个对象"
 }
 let newObj = Array.isArray(obj) ? [] : {};
 for (let key in obj) {
   if (obj.hasOwnProperty(key)) {   // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
        if(typeof obj[key] == "object") {
          Array.isArray(obj[key]) ? newObj[key]=[] : newObj[key]={};
          newObj[key] = dep(obj[key])
        }else {
          newObj[key] = obj[key]
        }   
   }
 }
 return newObj
}