function isPangram(string) {
  const regex = /[A-Za-z]/;
  
  return string.split().includes(regex)
}

console.log(isPangram("This is not a pangram"));
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
