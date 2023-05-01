alert('Bienvenido');

let nombre = prompt('Inngresa tu nombre');
let edad = parseInt(prompt(`${nombre}, cuantos años tienes?`));


if(edad >= 18){
    alert(`${nombre}, Tenemos estos productos para ofrecerte: Jameson, Johnny Walker y Jack Daniels.`);

    let wskySlct = prompt('Escribe el nombre de producto que quieres comprar');

   function precios(wskySlct){   
        switch (wskySlct.toLowerCase()){
            case 'jameson':
                return 7500;
                break;
            case 'johnny walker':
                return 8000;
                break;
            case 'jack daniels':
                return 9500;
                break;
            default: 
                return false;
                break;
        }
    }
    
    let precioSinIva = precios(wskySlct);

    if(precioSinIva != false){
        alert(`El precio del producto elejido es de $ ${precioSinIva} + IVA`);

        let confirmacion = prompt('Quieres comprar este producto?');

            if(confirmacion.toLowerCase() === 'si'){

                const suma = (a, b) => a + b;
                const iva = x => x * 0.21;
            
                let precioFinal = suma(precioSinIva, iva(precioSinIva));

                alert(`El precio final del producto es de $ ${precioFinal}`);
            }else{
                alert('No confirmaste la compra');
            }
    }else{
        alert('No seleccionaste un producto valido');
    }

}else{
    alert('No puedes comprar en esta tienda');
}