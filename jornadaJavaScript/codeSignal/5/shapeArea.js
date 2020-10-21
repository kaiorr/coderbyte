function shapeArea(n) {
  let r = (accumulator, currentValue) => accumulator + currentValue;
  let c = 4;
  let d = [1];
  for (i = 1; i < n; i++) {
    b = c * (n-i);
    d.push(b);
  }
return(d.reduce(r));
}
