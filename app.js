//Importe el modulo readline de Node.js con soporte para promesas
import * as readline from 'readline/promises';
// CORRECCIÓN: stdin y stdout deben venir de 'process'
import { stdin as input, stdout as output } from 'process'; 

//Aca estoy importando todas las funciones desde el archivo barril
import { Punto1, Punto2, Punto3, Punto4, Punto5 } from "./index.js";

// Creamos la interfaz de lectura vinculada a la terminal
const rl = readline.createInterface({ input, output });
let salir = false;

// Usamos un ciclo while para que cuando escoja 0
while(!salir){
    console.log("\n" + "=".repeat(50));
    console.log("         EVALUACION DE ASINCRONIA BIENVENIDO :)              ");
    console.log("\n" + "=".repeat(50));
    console.log("1. Listar tareas pendientes por usuario");
    console.log("2. Buscar usuario, álbumes y fotografías");
    console.log("3. Filtrar posts por nombre y agregar comentarios");
    console.log("4. Consultar usuarios (modificar respuesta: nombre y teléfono)");
    console.log("5. Consultar todos los datos anidados en una sola petición");
    console.log("0. Salir del programa");
    console.log("\n" + "=".repeat(50));

    //Solicito la opcion por teclado asincronamente
    const opcion = await rl.question("\nDigita el numero del ejercicio que deseas ejecutar: ");

    switch(opcion.trim()){
        case '1':
            
            console.log("\n--- Ejecutando Punto 1 ---");
            // await Punto1()
            break;

        case '2':
            console.log("\n--- Ejecutando Punto 2 ---");
            // await Punto2();
            break;

        case '3':
            console.log("\n--- Ejecutando Punto 3 ---");
            // await Punto3();
            break;

        case '4':
            console.log("\n--- Ejecutando Punto 4 ---");
            // await Punto4();
            break;

        case '5':
            console.log("\n--- Ejecutando Punto 5 ---");
            // await Punto5();
            break;

        case '0':
            console.log("\nSaliendo del programa. ¡Hasta luego!");
            salir = true; // Lo ponemos como True para que se salga del while 
            rl.close(); // Buena práctica: cerrar la interfaz de readline al salir
            break;

        default:
            console.log("\n Opción no válida. Por favor, intenta de nuevo con un número del 0 al 5.");
    }
}