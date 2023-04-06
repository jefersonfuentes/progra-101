
export function printMultiplicationTable (base: number, limit:number = 10){

    if (limit <=0 ) {
        throw new Error('Error el límite debe ser mayor a 0');
    }
    
    // For loop
    for (let i = 1; i <= limit; i++){
        console.log(base, 'x ', i, ' = ', (base * i));
    }
}