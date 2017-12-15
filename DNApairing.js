// Input GCG Output: [ [G, C], [C, G], [G,C] ]
// 1 split input into a char array.

// 2 get first character = firstChar

// 3 check if firstChar is G
// 	Create pair [G, C]
// 4 else if firstChar is C
// 	Create pair [C, G]
// 5 else if firstChar is T
// 	Create pair [T, A]
// 6 else if firstChar is A
// 	Create pair [ A, T]
// End if

// 7 push to dna strand
// 8 repeat step 3 for additional chars
// 9 return dna strand

// DNA Pairing

// Input - String of unmatched, Letters “ATCG”, will only give one case (capital),

// No limit to input length.

// Output - array of dna pairs => 2 char arrays. A<->T && C <->G, same length as the input.

// Solution

// Input GCG Output: [ [G, C], [C, G], [G,C] ]
// 1 split input into a char array.

// 2 get first character = firstChar

// 3 check if firstChar is G
// 	Create pair [G, C]
// 4 else if firstChar is C
// 	Create pair [C, G]
// 5 else if firstChar is T
// 	Create pair [T, A]
// 6 else if firstChar is A
// 	Create pair [ A, T]
// End if

// 7 push to dna strand
// 8 repeat step 3 for additional chars
// 9 return dna strand

function pairElement(str) {
   var element = str.split("");

  var charArrays = [];
  
  for(var i = 0; i < element.length; i++) {
    
   if (element[i] === "G"){
      charArrays.push(["G", "C"]);
       
     } else if (element[i] === "C") {
      charArrays.push(["C", "G"]);
       
     } else if (element[i] === "T") {
      charArrays.push(["T", "A"]);
      
      } else if(element[i] === "A") {
       charArrays.push(["A", "T"]);
      }
  }
    
  
  return charArrays;
}

