function hola(nombre, miCallBack){
    setTimeout(function(){
        console.log('hola ' + nombre);
        miCallBack(nombre);
    }, 1500);
};


function hablar(callBackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla... ')
        callBackHablar();
    });
};

function adios(nombre, otroCallBack){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallBack();
    }, 1000);
};

function conversacion(nombre, veces, callback) {
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    };
};

//---

console.log('Iniciando async...');
hola('Francisco', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});


// hola('Francisco',function(nombre){
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
//     // console.log('terminando proceso');
// });

// hola('Francisco', function(){});
// adios('Francisco', function(){});