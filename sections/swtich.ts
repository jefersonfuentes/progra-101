
export let weekDay: number =  5;

if ( weekDay <= 0) {
    
    throw new Error('Dia de la semana no permitido')
} 



switch ( weekDay ) {

    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
        break;

    case 3:
        console.log('Es miercoles');
        break;

    case 4:
        console.log('Es jueves');
        break;

    case 5:
        console.log('Es viernes');
        break;

    default: 
        console.log('No es lunes, martes, miercoles, jueves o viernes');
}