function moveZeros(arr) {
  const arr1 = [];
  const arr0 = [];

  arr.forEach((element) => {
    if (element === 0) {
      arr0.push(element);
    } else {
      arr1.push(element);
    }
  });
  return arr1.concat(arr0);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
