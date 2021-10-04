// CONDICIONALES //
//Los condicionales son sentencias que podemos utilizar para interpretar un conjunto de instrucciones en función 
//del resultado de una comparación

let nombreIngresado =  prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "martin")|| (nombreIngresado
     == "martin"))){  
         alert("Hola martin");
     }else{
         alert("Error: Ingresar nombre valido");
     }
     
 //BUCLES ---Los bucles son sentencias que podemos utilizar para 
 //repetir un conjunto de instrucciones más de una vez de forma consecutiva.

 
 let entrada = prompt("ingresar un dato");
 //repetimos con while hasta que el usuario ingresa "ESC"
 while(entrada != "ESC"){
     alert("El usuario ingreso  " + entrada);
     //volvemos a solicitar un dato, En la proxima iteracion se evalua si no  es ESC
     entrada = prompt("Ingresar otro dato");
}

// FUNCIONES //Los funciones son un conjunto de instrucciones destinadas a 
//resolver una situación en el programa. Podemos reutilizarlas y 
//modificarlas fácilmente.


const suma = (a, b) => { return a + b };
// Si es  funcion de una linea con retorno podemos evitar escribir el cuerpo

const resta = (a, b) => a - b;
console.log(suma(15,20));
console.log(resta(20,5));

//OBJETOS //  Los objetos son estructuras que podemos definir 
//para agrupar valores bajo un mismo criterio y asignarle comportamiento.

function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log("Hola SOY  " + this.nombre)}
}
const persona1 = new Persona("Homero" , 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge",36,"Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

//ARRAY -   Los Arrays son objetos que nos permite agrupar 
//distintos elementos (incluso otros objetos). 
//Son recursos muy útiles por sus métodos para aplicar filtros.

const numeros = [1,2,3,4,5];
const porDos =  numeros.map(x  => x * 2);//  POR DOS
const masCien =  numeros.map(x => x + 100);// por 100
const nombres = ["ana","ema","juan","elia"];
const lengths = nombre.map(nombre => nombre.length);//lengths = [3,3,4,4]

//STORAGE Y JSON

const productos = [{ id: 1, producto:"arroz", precio:125},
                   { id: 2, producto:"fideo", precio:70},
                   { id: 3, producto: "pan",  precio:50},
                   { id: 4, producto: "flan", precio:100}];
const guardarLocal = (clave,valor) => {localStorage.setItem(clave, valor)};

//ALMACENAR PRODUCTO POR PRODUCTO
for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto));
}

//o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

// DOM -- El DOM es la representación del documento HTML 
//que podemos emplear para modificar la página actual dinámicamente.

//EVENTOS EN EL DOM ---
//Los eventos son la manera que tenemos en Javascript
// de controlar las acciones de los usuarios y definir 
//un comportamiento de aplicación cuando se produzcan

<form id="formulario">
    <input type="text"></input>
    <input type="number"></input>
    <input type="submit" value="Enviar"></input>
</form>

//CODIGO JS
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}


