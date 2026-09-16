// modules/Punto4.js
export const consultarUser_NombreTelefono = async () => {
    try {
        // Realizamos la petición a la API para obtener los usuarios
        const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Validamos la respuesta
        if (!usersRes.ok) throw new Error(`Error al obtener usuarios: ${usersRes.status}`);
        
        // Convertimos la respuesta a JSON
        const users = await usersRes.json();

        // Creamos un nuevo arreglo modificando la respuesta para extraer solo el nombre y el teléfono
        const modifiedUsers = users.map(user => ({
            name: user.name,
            phone: user.phone
        }));

        // Mostramos el resultado en una tabla para mayor legibilidad en la terminal
        console.log("\n=== LISTADO DE USUARIOS (NOMBRE Y TELÉFONO) ===");
        console.table(modifiedUsers);

    } catch (error) {
        // Capturamos y mostramos cualquier error que ocurra
        console.error("\nOcurrió un error al consultar los usuarios (Punto 4):", error.message);
    }
};