function solution(str) {
    var array = [];
    if (str.length % 2 !== 0) {
        str = str + "_";
    }
    for (var i = 0; i < str.length; i = i + 2) {
        array.push(str[i] + str[i + 1]);
    }
    return array;
}
console.log(solution("abcdd"));
