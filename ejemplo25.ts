function saludar4(fn: (a: string) => void){
    fn("hola mundo");
}

function imprimirconsola(s: string){
    console.log(s)
}

saludar4(imprimirconsola);