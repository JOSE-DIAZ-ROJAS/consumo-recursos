//[VARIABLES]
const cargarImagen = document.getElementById('contenedorimg');
console.log(cargarImagen);
let imagenes = [];
let description = [];




//[LISTENES]



//[FUNCIONES]


async function getData(){ // indicamos que se trata de una funcion asincrona(devolvera una promesa)
    
    try{
const result = await fetch('https://tienda-ropa-1-default-rtdb.firebaseio.com/products.json'); // fetch devuelve promesa, se usa para realizar solicitudes http

if(!result.ok){
throw new Error(`Error 1: ${result.statusText}`); // statusText nos devuelve le text del codigo de estado
    }
const data = await result.json();
let valores = Object.values(data);
valores.forEach((element)=>{


imagenes = [...imagenes, element.fotoUrl];
description = [...description,element.descripcion];


});


for(i=0;i<imagenes.length;i++){

    const pintarimg = document.createElement('div');
    pintarimg.classList.add('main__item');
    pintarimg.innerHTML =`
    
    <img  class="main__img" src="${imagenes[i]}"/>
    <p class ="main__text">${description[i]}</p>
    
    `;
    cargarImagen.appendChild(pintarimg);
};

}catch(error){
console.log(`Error al obtener la data: ${error}`)
    };

};

getData();
