function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[\W_]+/g, "");
  console.log(str)
  if(str.charAt(0) !== str.charAt(str.length-1))
  {
    return false;
  }
  //Everything below is solid except for the '1 eye' input 
  //don't touch
  str = str.replace(/[^a-z]/g, "");
  var arr = [...str];
  //console.log(arr)
  for(var i=0; i<arr.length; i++)
  {
    if(arr[i] !== arr[arr.length - (1+i)])
    {
      console.log()
      return false;
    }
  }
  //console.log("oi")
  return true;
}


//Can edit this one ofc
palindrome("_eye");
