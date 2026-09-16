export const listarTareaPendiente = async () => {
    try {
        // Realizamos la petición HTTP a la API pública para obtener las tareas (todos)
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

        // Validamos si la respuesta del servidor fue exitosa (status HTTP 200-299)
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }

        // Convertimos la respuesta recibida a un arreglo de objetos JSON
        const tareas = await respuesta.json();

        // Filtramos para obtener únicamente las tareas que NO están completadas (completed === false)
        const tareasPendientes = tareas.filter(tarea => !tarea.completed);

        // Agrupamos las tareas pendientes por id de usuario (userId)
        const agrupadasPorUsuario = {};

        tareasPendientes.forEach(tarea => {
            // Si el id de usuario aún no está registrado en nuestro objeto, le asignamos un arreglo vacío
            if (!agrupadasPorUsuario[tarea.userId]) {
                agrupadasPorUsuario[tarea.userId] = [];
            }
            // Agregamos el título de la tarea pendiente al arreglo del usuario correspondiente
            agrupadasPorUsuario[tarea.userId].push(tarea.title);
        });

        // Mostramos el resultado formateado en la terminal
        console.log("\n=======================================================");
        console.log("          LISTADO DE TAREAS PENDIENTES POR USUARIO     ");
        console.log("=======================================================");

        for (const userId in agrupadasPorUsuario) {
            console.log(`\n Usuario ID: ${userId} (${agrupadasPorUsuario[userId].length} tareas pendientes)`);
            agrupadasPorUsuario[userId].forEach((titulo, index) => {
                console.log(`   ${index + 1}. ${titulo}`);
            });
        }
    } catch (error) {
        // Capturamos cualquier error en la petición o procesamiento de datos
        console.error("\n Ocurrió un error al consultar las tareas:", error.message);
    }
};