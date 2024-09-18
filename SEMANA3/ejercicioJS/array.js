// Crear array
let nombres = ["Edwin", "Merary", "Roy", "Junior", "Estebam", "Ana", "Brenda", "Pablo"];
let edades = [21, 47, 47, 28, 25, 34, 44, 31];


console.log(`Nombre en el 3: ${nombres[3]}`); 
console.log(`Nombre en el 5: ${nombres[5]}`); 
console.log(`Nombre en el 7: ${nombres[7]}`); 
console.log(`Nombre en el 100: ${nombres[100]}`); 

console.log(`Edad en el 7: ${edades[7]}`); // 33
console.log(`Edad en el 1: ${edades[1]}`); // 22
console.log(`Edad en el 3: ${edades[3]}`); // 25
console.log(`Edad en el 100: ${edades[100]}`); // undefined (índice no existente)

// Caambiar los valores del array en la posiscion:
nombres[4] = "Jose";
nombres[5] = "Christian";
nombres[6] = "Michelle";

edades[4] = 50;
edades[5] = 24;
edades[6] = 32;

// Ver los cambios en los arrays
console.log("Después de modificar los array:");
console.log(`Nombres: ${nombres}`);
console.log(`Edades: ${edades}`);
