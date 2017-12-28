
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  
//The for loop runs, starting at the first object in the contacts list.
for (var i = 0; i < contacts.length; i++){
//   If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
if (contacts [i].firstName === firstName){
 
//   Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
// If the second if statement fails, No such property is returned.
  if (contacts[i].hasOwnProperty(prop)){
    return contacts[i][prop];

    //     If the first if statement fails, the for loop continues on to the next object in the contacts list.
    } else {
      return "No such property";
    }
  }
}
//  If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned. 
  return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
