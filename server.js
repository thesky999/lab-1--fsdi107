
console.log("Hello NodeJS");

var name = "Trevor";
var lastName = 'Dotzler';
var age = 32;
var found = false;
var average = 12.65484

if(age < 60){
    console.log('You are still young.');
}
else{
    console.log("Sorry, you are old.");
}

// print numbers from 3 to 12, except 9
for(let i=3; i < 13; i++){
    if(i !=9){
        console.log(i);
    }
}

// arrays
var names = [];
names.push("Terri");
names.push("Nora");
names.push("Gerry");
names.push("Briun");

console.log(names[0]); // first element

for(var j=names.length -1; j >= names.length; j--){
    console.log(names[j]);
}

// terminal
// node filename | node server.js
// mac: clear
// win: cls
// win: CMDER