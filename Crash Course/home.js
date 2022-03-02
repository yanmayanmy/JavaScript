//console.log("hello");
// alert("hey");

document.getElementById('title').innerHTML = "JavaScript F**king 8 Hour Crash Couse!!";


function reply(){
    var your_name = prompt("Tell me your name.")
    document.getElementById("user-info").style.display = "";
    document.getElementById("user-name").innerHTML = your_name;
}

let fruit = "apple, banana, orange";
console.log(fruit.split(", "));
console.log(fruit.replace("a", "@"));
console.log(fruit.replaceAll("a", "@"));
console.log(fruit.indexOf("g"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[4]);
console.log(fruit.charAt(4));
console.log(fruit);

// Array
let dci = ["Blue Devils", "Vanguard", "Cadets", "Bluecoats"];

for (let i = 0; i < dci.length; i++) {
    console.log(dci[i]);
}

// Array common methods
console.log("world class groups : ", dci.toString()); //opposite of split
console.log(dci.join("\n"));
dci.pop(); // Remove an element at the end
console.log(dci);
dci.push("Cavaliers"); //Add an element at the end
console.log(dci);
dci.shift(); //Remove an element at the top
console.log(dci);
dci.unshift("Carolina Crown"); // Add an element at the top
console.log(dci);

let otherGroups = ["Crossmen", "Madison Scouts", "C2"];
let allGroups = dci.concat(otherGroups); //Combine two arrays
console.log(allGroups);

console.log(allGroups.slice(2, 5));
console.log(allGroups.reverse());
console.log(allGroups.sort());

let numbers = [2, 43, 5, 75, 34, 38, 9, 86, 0];
console.log(numbers.sort()); // Ascending
console.log(numbers.sort(function(a, b){return a-b })); // Ascending
console.log(numbers.sort(function(a, b){return b-a })); // Descending

// Objects
let student = {
    first: 'Yuta', 
    last:'Yamauchi',
    studentInfo: function (){
        return this.first + ' ' + this.last;
    }
};
console.log(student.first);
console.log(student["last"]);

//change value
student['first'] = 'Yanma';
student.last = 'Yanmy';

console.log(student.studentInfo());

// Conditionals, Control flows (if else)



