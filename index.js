const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;

let grade;
if (averageMarks < 60) grade = 'F';
else if (averageMarks < 70) grade = 'D';
else if (averageMarks < 80) grade = 'C';
else if (averageMarks < 90) grade = 'B';
else grade = 'A';

console.log(`Average Marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);


// #2

document.getElementById("myInput").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        console.log("Enter passed")
    }
})


// #3
document.getElementById("doubleClickElement").addEventListener("dblclick", function(){
    alert("Double-clicked")
})

// #4
let progress = 0;

function updateProgress(amount){
    progress = Math.min(progress + amount, 100);
    document.getElementById("progressBar").style.width = progress + "%";
}

// #5
for(let i = 1; i <= 100; i++){
    let output = " ";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}
