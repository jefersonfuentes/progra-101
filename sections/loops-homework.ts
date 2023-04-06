
export let base: number = 10;
export let limit: number = 50;

// For loop
for (let i = 1; i <= limit; i++){
    console.log(base, 'x ', i, ' = ', (base * i));
}
console.log(' ')
// While Loop
let j = 1;
while( j <=limit ){
    console.log(base, 'x ', j, ' = ', (base * j));
    j++;
}
// Do While Loop
console.log(' ')
let k = 1;
do{
    console.log(base, 'x ', k, ' = ', (base * k));
    k++;
} while ( k <= limit);