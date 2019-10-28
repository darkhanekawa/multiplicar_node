//requireds
const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        else{
            for(let i = 1; i <= limite ;i++){
                r = base * i;
                resolve(console.log(`${ base } * ${ i } = ${ r }`));
            }
        } 
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = ''; 

        for(let i = 1; i <= limite ;i++){
            r = base * i;
            data += `${ base } * ${ i } = ${ r }\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
