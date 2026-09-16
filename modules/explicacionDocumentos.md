# Explicación de Módulos (Documentos)

A continuación se detalla la función principal de los 5 archivos JavaScript contenidos en la carpeta `modules`:

### 1. `agruparDatos_segun_Username.js`
Este módulo solicita al usuario ingresar un *username* por consola y hace una petición a la API para encontrarlo[cite: 5]. Una vez identificado, obtiene los álbumes pertenecientes a ese usuario y extrae las fotografías asociadas a cada álbum[cite: 5]. Finalmente, consolida y muestra en pantalla la información del usuario junto con sus álbumes y fotos estructuradas[cite: 5].

### 2. `consultarUser_NombreTelefono.js`
Se encarga de realizar una petición a la API para obtener la lista completa de usuarios[cite: 4]. Luego, extrae y crea un nuevo arreglo que contiene únicamente las propiedades de nombre (`name`) y teléfono (`phone`) de cada registro, mostrando esta información de forma estructurada en la terminal usando una tabla (`console.table`)[cite: 4].

### 3. `filtrarPostPorNombre.js`
Solicita al usuario ingresar un título (o un fragmento del mismo) por teclado para buscar coincidencias dentro de todos los posts de la API[cite: 3]. Tras filtrar los posts que incluyen esa cadena de texto, obtiene los comentarios globales y los anida dentro de su respectivo post basándose en el ID[cite: 3]. Imprime en consola los posts encontrados con sus respectivos comentarios[cite: 3].

### 4. `listarTareaPendiente.js`
Consulta la ruta de tareas (*todos*) en la API y aplica un filtro para conservar únicamente aquellas que no han sido completadas (`completed === false`)[cite: 2]. Posteriormente, agrupa los títulos de estas tareas basándose en el ID del usuario (`userId`) y muestra un listado formateado en la terminal con el total de pendientes por cada usuario[cite: 2].

### 5. `solicitarTodosUsuarios.js`
Optimiza el consumo de la API utilizando `Promise.all` para ejecutar de forma simultánea cinco peticiones HTTP (usuarios, posts, comentarios, álbumes y fotos)[cite: 1]. Tras recibir los datos, mapea el arreglo de usuarios para anidarles toda su información dependiente: a cada usuario le asigna sus álbumes (que a su vez contienen sus propias fotos) y sus posts (con sus comentarios anidados), devolviendo una estructura de datos completamente consolidada[cite: 1].