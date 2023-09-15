// 1)
let person = {
  name: "Anmol",
  age: 20,
  country: "India"
};
function logData() {
  let intro =
    person.name +
    " is " +
    person.age +
    " years old and lives in " +
    person.country;
  return intro;
}
console.log(logData());

//2)
let age = 15;
if (age < 6) {
  console.log("Free");
} else if (age < 18) {
  console.log("Child discount");
} else if (age < 27) {
  console.log("Student Discount discount");
} else if (age < 67) {
  console.log("Full Price");
} else {
  console.log("Senior citizen discount");
}

//3)
let largeCountries = ["china", "india", "usa", "indonesia", "pakistan"];
console.log("The 5 largest countries in world");
for (let i = 0; i < largeCountries.length; i++) {
  const element = array[i];
  return " - " + element;
}
console.log("*/");

//4)
let largeCountry = ["tuvalu", "india", "usa", "indonesia", "monaco"];
largeCountry.pop();
largeCountry.push("pakistan");
largeCountry.shift();
largeCountry.unshift("china");
console.log(largeCountry);

//5)
let dayOfMonth = 13;
let weekday = "Friday";
if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("Spooky Face");
}

//6)
let hands=["rock","paper","scissors"];
function randomHands(){
    var index=Math.floor((hands.length-1)* Math.random()) ;
    return hands[index];
}
console.log(randomHands());

//7)
let fruit=["apple","orange","apple","apple","orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i]==="apple") {
            appleShelf.textContent +="apple";
        }
        else if (fruit[i]==="orange"){
            orangeShelf.textContent +="orange";
        }
    }
}
console.log(sortFruit());



