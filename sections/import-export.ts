import { 
    addTwoNumbers, 
    substractTwoNumbers, 
    divideTwoNumbers, 
    timesTwoNumbers,
} from "../helpers/math-helpers";

let num1: number = 10;
let num2: number = 20;


let total1: number = addTwoNumbers(num1 , num2);
let total2: number = substractTwoNumbers(num1 , num2);
let total3: number = timesTwoNumbers(num1 , num2);
let total4: number = divideTwoNumbers(num1 , num2);

console.log('Total add', total1)
console.log('Total substract', total2)
console.log('Total times', total3)
console.log('Total divide', total4)
