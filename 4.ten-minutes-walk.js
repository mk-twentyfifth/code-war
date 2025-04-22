function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }

  let x = 0; // e w
  let y = 0; // n s

  for (let i of walk) {
    if (i == "n") {
      x = x + 1;
    }
    if (i == "s") {
      x = x -1;
    }
    if (i == "e") {
      y = y + 1;
    }
    if (i == "w") {
      y = y - 1;
    }
  }

  result = Boolean;

  if(x == 0 && y == 0){
    result = true
    return true
  } else {
    result = false
    return false
  }
}

console.log(isValidWalk(["n", "w", "n", "s", "n", "s", "n", "s", "n", "s"]));
