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

## 2 - Enunciado

- Capture la información del personaje y preséntela en el HTML, puede
  presentar la información como los ejemplos que se muestran en la página
  de la API:

![personaje_biblesuarus](personaje_biblesaurus.jpg)

- Puede agregar o no estilos al HTML, o presentar la información de forma cruda (queda a su criterio y creatividad).
*/

const btn = document.getElementById("btnConsultar");
btn.onclick = () =>{
  const personaje = document.querySelector("#personaje").value;
   let url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
   fetch(url)
   .then(Resp =>Resp.json())
   .then(data =>{
    console.log(data.results[0])
    console.log(personaje)
    console.log(url)
    
    data.results.forEach(Element=> {
    const contenedor = document.createElement("div")
    contenedor.style.background="grey"
    contenedor.style.color= "white"
    
    contenedor.innerHTML = `
      <table>
      <img src= "${Element.url}" alt="">
      <img src= "${Element.image}" align="left" width="348px">
      <h1> ${Element.name}</h1>
      <h2><li> ${Element.status} - ${Element.species}</li></h2>
      <p> Last Known location </p>
      <h2> ${Element.location.name}</h2>
      <p> First seen in: </p>
      <h2> Never Ricking Morty</h2>
      </table>
      `
     document.body.appendChild(contenedor);

  });

})

} 


    
   
   
  

