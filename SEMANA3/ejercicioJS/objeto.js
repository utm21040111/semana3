// Objeto Carro
let carro = {
    marca: "Nissan",
    modelo: "Tida",
    año: 2012,
    color: "Azul"
};

// Objeto Casa
let casa = {
    tamaño: "120 m2",
    habitaciones: 2,
    ubicación: "Aguascalientes",
    jardín: true
};

// Objeto Humano
let humano = {
    nombre: "Edwin",
    edad: 21,
    ocupación: "Ingeniero y PM",
    nacionalidad: "Mexicano"
};

// Acceder a propiedades de los objetos
console.log(`Carro: Marca: ${carro.marca}, Modelo: ${carro.modelo}, Año: ${carro.año}, Color: ${carro.color}`);
console.log(`Casa: Tamaño: ${casa.tamaño}, Habitaciones: ${casa.habitaciones}, Ubicación: ${casa.ubicación}, Jardín: ${casa.jardín}`);
console.log(`Humano: Nombre: ${humano.nombre}, Edad: ${humano.edad}, Ocupación: ${humano.ocupación}, Nacionalidad: ${humano.nacionalidad}`);

// Cambiar 3 propiedades de cada objeto
carro.marca = "Mazda";
carro.modelo = "Mazda 2";
carro.color = "Negro";

casa.tamaño = "200 m2";
casa.habitaciones = 4;
casa.jardín = false;

humano.nombre = "Roy";
humano.edad = 20;
humano.ocupación = "Estudiante";

// Ver los cambios en los objetos
console.log("Después de modificar los objetos:");
console.log(`Carro: Marca: ${carro.marca}, Modelo: ${carro.modelo}, Año: ${carro.año}, Color: ${carro.color}`);
console.log(`Casa: Tamaño: ${casa.tamaño}, Habitaciones: ${casa.habitaciones}, Ubicación: ${casa.ubicación}, Jardín: ${casa.jardín}`);
console.log(`Humano: Nombre: ${humano.nombre}, Edad: ${humano.edad}, Ocupación: ${humano.ocupación}, Nacionalidad: ${humano.nacionalidad}`);
