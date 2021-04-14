function solution(str, ending) {
  if (str.substring(str.length - ending.length) === ending) {
    return true;
  } else return false;
}
console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
