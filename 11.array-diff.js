function arrayDiff(a, b) {
  let results = [];

  a.map((item) => {
    if (!b.includes(item)) {
      results.push(item);
    }
  });

  return results;
}

const a = [1, 2, 2, 2, 3];
const b = [2, 0];
// results = [1,3]

console.log(arrayDiff(a, b));

// Things to learn and master
// 1. arr.filter()
// 2. arr.includes()
