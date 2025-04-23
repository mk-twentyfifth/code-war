const isogram = (str) => {
  if (typeof str != "string") {
    return "this is not a string";
  }

  if (str == "") {
    return "this is an isogram";
  }

  const array = str.toLowerCase().split("");
  const set = new Set(array);

  if (set.size == array.length) {
    return true;
  } else {
    return false;
  }
};
console.log(isogram("asdf"));
