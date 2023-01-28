function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[\W_]/g, "");

  let arr = str.split("");
  console.log(arr);

  let newStr = [];
  
  for(let i = arr.length-1; i>=0; i--)
  {
    newStr.push(arr[i]);
  }

  newStr = newStr.join("");


  return newStr == str;
  
}

palindrome("eye");
