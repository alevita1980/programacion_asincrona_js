"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado

## 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Consultar"
y leer los datos ingresados en "personaje".
- Tome esos datos y dentro del evento consulte los datos del
  personaje con la API mediante fetch.
- Ejemplo de la URL con la variable personaje:
- * `https://rickandmortyapi.com/api/character/?name=${personaje}`
- Capture los datos del personaje en un JSON e imprimalos en consola.
*/

const btn = document.getElementById("btnConsultar");
btn.onclick = () =>{
  const personaje = document.getElementById('personaje').value;
   let url = "https://rickandmortyapi.com/api/character/?name=Biblesaurus"
   fetch(url)
   .then(Response =>Response.json())
   .then(data =>{
    console.log(data)
    console.log(personaje)
console.log(url)
    let contenedor=""
    
      contenedor+=
    ` <p> ${data.id}</p>
      <p> ${data.name}</p>
      <img src= "${data.url}" alt="">
      <img src= "${data.image}" alt="">
      <p> ${data.species}</p>
      <p> ${data.status}</p>

      `
     document.getElementById("personaje").innerHTML=contenedor

  });

}

  


    
   
   
  

