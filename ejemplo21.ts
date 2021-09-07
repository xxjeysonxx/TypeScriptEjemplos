type Punto = {
    x:number;
    y:number;
}

function imprimircoordenada(punto: Punto){
    console.log(`la coordenada x es: ${punto.x}`);
    console.log(`la coordenada y es: ${punto.y}`);
}

imprimircoordenada({x:10, y:25});