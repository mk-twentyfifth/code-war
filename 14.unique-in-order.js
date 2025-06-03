function uniqueInOrder(iterable) {
  //   console.log(typeof iterable);

  let array = [];

  if (typeof iterable === "string") {
    array = iterable.split("");
  } else {
    array = iterable;
  }
  
  console.log("array", array)

  const newArray = [];
  console.log(newArray.length);

  array.map((a) => {
    console.log("x", a)
    if (newArray.length == 0) {
      newArray.push(a);
      console.log("a", newArray.length)
    } else {
      if (newArray[newArray.length - 1] != a) {
        newArray.push(a);
      }
    }
  });

  console.log("newArray", newArray);
  return newArray
}

const test1 = uniqueInOrder([1, 2, 2, 3, 3]);
const test2 = uniqueInOrder("ABBCcAD");

test1;
// test2;

// input : string or array
// output : array of unqiues in order
