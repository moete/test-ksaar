function closetToZero(list) {
  if (!list.length) {
    return 0;
  }
  let close = 0;
  for (let i = 0; i < list.length; i++) {
    if (close === 0) {
      close = list[i];
    } else if (list[i] > 0 && list[i] <= Math.abs(close)) {
      close = list[i];
    } else if (list[i] < 0 && -list[i] < Math.abs(close)) {
      close = list[i];
    }
  }
  return close;
}
let items = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7,1.7];
console.log("Result: " + closetToZero(items));


