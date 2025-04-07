
const body=document.querySelector("body");

export function cambiarCursor(raza){
    if(raza==="humano"){
        document.documentElement.style.cursor ="url('./Imagenes/cursores/cursorHumano.svg') 16 16, auto";
        body.style.cursor="url('./Imagenes/cursores/cursorHumano.svg') 16 16, auto";
    }else if(raza==="orco"){
        document.documentElement.style.cursor ="url('./Imagenes/cursores/cursorOrco.svg') 16 16, auto";
        body.style.cursor="url('./Imagenes/cursores/cursorOrco.svg') 16 16, auto";
    }else if(raza==="enano"){
        document.documentElement.style.cursor ="url('./Imagenes/cursores/cursorEnano.svg') 16 16, auto";
        body.style.cursor="url('./Imagenes/cursores/cursorEnano.svg') 16 16, auto";
    }else if(raza==="elfo"){
        document.documentElement.style.cursor ="url('./Imagenes/cursores/cursorElfo.svg') 16 16, auto";
        body.style.cursor="url('./Imagenes/cursores/cursorElfo.svg') 16 16, auto";
    }else{
        document.documentElement.style.cursor ="url('./Imagenes/cursores/cursorMago.svg') 16 16, auto";
        body.style.cursor="url('./Imagenes/cursores/cursorMago.svg') 16 16, auto";
    }
}
