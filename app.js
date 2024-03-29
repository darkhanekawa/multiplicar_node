const argv = require('./config/yargs').argv;

const { listarTabla } = require('./multiplicar/multiplicar')
const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
    listarTabla(argv.base, argv.limite)
    .catch(e => console.log(e));
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e => console.log(e));
        break;

    default: console.log('Comando no reconocido');
}

//console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
