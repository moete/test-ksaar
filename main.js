function closetToZero(list) {
  //si le tab est vide
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
let items = [1, -10, 13, 8, 4, -1];
console.log("Result: " + closetToZero(items));




