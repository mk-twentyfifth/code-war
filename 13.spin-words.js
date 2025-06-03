function spinWords(string) {
  const array = string.trim().split(" ");
  const newArray = [];
  array.map((a) => {
    if (a.length >= 5) {
      const array = a.split("");
      const reverseArray = array.reverse();
      const joinReverseArray = reverseArray.join("")

      newArray.push(joinReverseArray);
      return;
    } else {
      newArray.push(a);
      return;
    }
  });
  const result = newArray.join(" ")
  return result;
}

const string = "Hey Hello Worlds Baha coca cocacola";

spinWords(string);
