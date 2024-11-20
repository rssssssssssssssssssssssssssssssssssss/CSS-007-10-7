let array = ["Harry", "Harmoine", "Ron", "Draco", "Luna"]; //Quesiton 1
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
let firstName = "Harry"; //Question 2
let house = "Gryffindor";
console.log("Welcome, " + firstName + " of " + house + "!");

let characterName = "Hermoine";
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

let spell = " Expelliarmus "; // question 4
console.log(spell.trim());

let quote = "I solemnly swear that I am up to no good"; // question 5
console.log(quote.slice(11, 16));

firstName = "Ron"; //question 6
let lastName = "Weasly";
let combined = firstName.concat(" " + lastName);
console.log(combined);

let sentence = "Draco is a good wizard"; //question 7
let replaceSentence = sentence.replace("good", "bad")
console.log(replaceSentence);

array = ["Hufflepuff", "Ravenclaw", "Gryffindor"]; //question 8
array.push("Slytherin");
console.log(array);
console.log(array.pop());
console.log(array);

array = ["spell1", "spell2", "spell3"]; //question 9
array.unshift("spell4");
console.log(array);
array.shift();
console.log(array);

array = ["Snape", "McGonagal", "Dumbledoor", "Hagrid"]; // questio 10
console.log(array.slice(1, 3));

array = ["Seamus", "Neville", "Parvati", "Dean"]; //question 11
array.splice(1, 2);
console.log(array);

let phrase = " Mischief Managed "; //question 12
phrase.trim();
combined = phrase.concat(" - Harry");
console.log(combined);

let wizards = ["Harry", "Hermoine", "Ron"]; //question 13
wizards.push("Luna", "Draco");
console.log(wizards);

let message = "Welcome to Hogwards school of Witchcraft and Wizardry"; //question 14
console.log(message);
message = message.slice(11, 19);
message = message.concat(" Castle");
console.log(message);