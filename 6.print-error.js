function printerError(s) {
  const array = s.split("");

  const errorPattern = /[n-z]/;

  const error = [];

  array.forEach((element) => {
    if (errorPattern.test(element)) {
      error.push(element);
    }
  });

  const arrayLength = array.length;
  const errorLength = error.length;

  const results = `${errorLength}/${arrayLength}`;

  return results;
}

const string = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"; //1/14
console.log(printerError(string));
