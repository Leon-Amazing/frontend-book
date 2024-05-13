let arr = [27.2, 0, '0013', '14px', 123];
arr = arr.map(parseInt);
console.log(arr);

{
  /* 
    [27, NaN, 1, 1, 27]
    把一个函数作为值传递给另外一个函数执行（实参）:回调函数

    parseInt(27.2,0) 
    parseInt('27.2') -> 27
    parseInt(0,1)
    NaN
    parseInt('0013',2)
    '001' 看做2进制 转换为10进制
    1*2^0 -> 1
    parseInt('14px',3)
    '1' 看做3进制 转换为10进制
    1*3^0 -> 1
    parseInt(123,4)
    parseInt('123',4)
    '123' 看做4进制 转换为10进制
    3*4^0 + 2*4^1 + 1*4^2 -> 3+8+16 -> 27 
    */
}
