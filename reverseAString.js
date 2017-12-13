function reverseString(str) {
var strArray = [];
strArray = str.split("");
// console.log("splitting the string");
// console.log(strArray);

strArray.reverse();
//   console.log("after reverse");
//   console.log(strArray);

  var reverseStr = strArray.join("");
//    console.log("after join");
//   console.log(reverseStr);

return reverseStr;
}

reverseString("hello");


////////////////////////////////////////
function reverseString(str) {
return str.split("").reverse().join("");
  
// strArray = str.split("");

// console.log("splitting the string");
// console.log(strArray);

// return str.reverse().join("");
//   console.log("after reverse");
//   console.log(strArray);

// return str.join("");
//    console.log("after join");
//   console.log(reverseStr);
}

reverseString("hello");
