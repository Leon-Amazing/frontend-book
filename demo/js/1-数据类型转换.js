// a=？

if (a == 1 && a == 2 && a == 3) {
  console.log('OK');
}

{
  // 方案一：利用==比较会把a转换为数字，再根据对象转数字会经理一系列的步骤，此时我们可以重写某一步骤，实现自己的需求
  /* 
    var a = {
        i: 0,
        // 重写：Symbol.toPrimitive/valueOf/toString
        [Symbol.toPrimitive]() {
            return ++this.i;
        }
    };
    // a == 1  Number(a) -> a[Symbol.toPrimitive]()
    if (a == 1 && a == 2 && a == 3) {
        console.log('OK');
    } 
    */
  /* 
    var a = [1, 2, 3];
    a.toString = a.shift;
    if (a == 1 && a == 2 && a == 3) {
        console.log('OK');
    } 
  */
  // 方案二：在全局上下文中基于var声明变量，是给window全局对象设置属性，再利用数据劫持，可以实现这个需求
  /* 
  var i = 0;
      Object.defineProperty(window, 'a', {
          get() {
              return ++i;
          }
      });
      if (a == 1 && a == 2 && a == 3) {
          console.log('OK');
      }
      
    */
}
