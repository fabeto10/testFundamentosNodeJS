function hola(nombre, miCallBack){
    setTimeout(function(){
        console.log('hola ' + nombre);
        miCallBack(nombre);
    }, 1500);
};

function adios(nombre, otroCallBack){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallBack();
    }, 1000);
};

console.log('Iniciando async...');

hola('Francisco',function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso...');
    });
    console.log('terminando proceso');
});

// hola('Francisco', function(){});
// adios('Francisco', function(){});