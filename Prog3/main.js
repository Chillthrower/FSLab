// Demonstration of Advanced iteration techniques and JavaScript Modules

import { square , cube } from './mathModule.js';

const numbers = [2, 4, 6, 8]; 

const students = { name: "John Doe", age: 20, course: "Computer Science" };

console.log("Squares of Numbers:");
for (let num of numbers) console.log(`${num}: ${square(num)}`);

console.log("Student Details:");
for (let kid in students) console.log(`${kid}: ${students[kid]}`);

console.log("Cubes of Numbers:");
numbers.forEach(num => console.log(`${num}: ${cube(num)}`));
