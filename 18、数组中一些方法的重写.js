// 问题需求:
// 删除数组第一个元素，不能使用shift方法
// 问题解决:

Array.prototype.dropFirstElement=function(){
  for(let i=0;i<this.length;i++){
    this[i]=this[i+1];
    //简单元素位置左移
  }
  this.length--;
  return this;
}
const nums=[3,4,5,6,7];
nums.dropFirstElement();
console.log(nums);//返回[4,5,6,7]
