function isIsogram(str) {
  const toLowerCase = str.toLowerCase();
  if (toLowerCase === "") {
    return true;
  }

  const set = new Set(toLowerCase);
  const length = toLowerCase.length;

  if (set.size == length) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("Dermatoglyphics"));
