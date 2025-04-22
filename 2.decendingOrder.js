const decendingOrder = (n) => {
  if (typeof n != "number") {
    throw new Error("this is not a number");
  }

  if (n <= 0) {
    throw new Error("this is not a positive number");
  }

  const toString = n.toString();
  const toArray = toString.split("");
  const toSort = toArray.toSorted(function (a, b) {
    return a - b;
  });
  const reversedSort = toSort.reverse();
  const arrToString = reversedSort.toString();
  const stringReplace = arrToString.replaceAll(",", "");
  const stringToNumber = parseInt(stringReplace);

  return stringToNumber;
};
console.log(decendingOrder(123));
