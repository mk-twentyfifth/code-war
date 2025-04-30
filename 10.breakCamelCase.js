function solution(string) {
  const split = string.split("");
  let results = [];

  if (string == "") {
    return "";
  } else {
    split.map((s) => {
      if (s === s.toUpperCase()) {
        return (results = results + " " + s);
      }
      results = results + s;
    });
  }

  return results;
}

console.log(solution(""));
