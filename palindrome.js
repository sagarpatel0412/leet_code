const isPalindrome = function (x) {
  const str = x.toString();
  console.log(str, "str", str.split("").reverse().join(""));
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(-121));
