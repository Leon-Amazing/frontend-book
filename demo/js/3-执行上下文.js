{
  let a = { n: 2 };
  let b = a;
  b.n = 13;
  console.log(a.n);
}

{
  let a = { n: 1 };
  let b = a;
  a.x = a = { n: 2 };
  console.log(a.x);
  console.log(b);
}

{
  let x = [12, 23];
  function fn(y) {
    y[0] = 100;
    y = [100];
    y[1] = 200;
    console.log(y);
  }
  fn(x);
  console.log(x);
}
