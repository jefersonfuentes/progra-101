export let base: number = 100;

for ( let i = 0; i <= base; i++) {

    if (i === 5){
        continue;
    }
    
    console.log('let i: ', i);

    if (i === 5 ){
        break;
    }
}