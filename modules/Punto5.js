// modules/Punto5.js
export const Punto5 = async () => {
    // Iniciamos un bloque try-catch para el manejo correcto de errores asíncronos.
    try {
        // Imprimimos un mensaje en consola para indicar que inició el proceso de carga de datos.
        console.log("\nObteniendo y consolidando toda la información, por favor espera...");

        // Usamos Promise.all para realizar múltiples peticiones HTTP a la API de forma simultánea. Soluciona el cuello de botella de esperar a que termine una petición para empezar otra.
        const [usersRes, postsRes, commentsRes, albumsRes, photosRes] = await Promise.all([
            // Petición HTTP para obtener la lista completa de usuarios.
            fetch('https://jsonplaceholder.typicode.com/users'),
            // Petición HTTP para obtener la lista completa de posts.
            fetch('https://jsonplaceholder.typicode.com/posts'),
            // Petición HTTP para obtener la lista completa de comentarios.
            fetch('https://jsonplaceholder.typicode.com/comments'),
            // Petición HTTP para obtener la lista completa de álbumes.
            fetch('https://jsonplaceholder.typicode.com/albums'),
            // Petición HTTP para obtener la lista completa de fotos.
            fetch('https://jsonplaceholder.typicode.com/photos')
        ]);

        // Verificamos si alguna de las peticiones falló para evitar procesar datos corruptos.
        if (!usersRes.ok || !postsRes.ok || !commentsRes.ok || !albumsRes.ok || !photosRes.ok) {
            // Lanzamos un error general si alguna respuesta no tiene status 200-299.
            throw new Error("Una o más peticiones a la API fallaron.");
        }

        // Parseamos la respuesta de los usuarios a formato JSON.
        const users = await usersRes.json();
        // Parseamos la respuesta de los posts a formato JSON.
        const posts = await postsRes.json();
        // Parseamos la respuesta de los comentarios a formato JSON.
        const comments = await commentsRes.json();
        // Parseamos la respuesta de los álbumes a formato JSON.
        const albums = await albumsRes.json();
        // Parseamos la respuesta de las fotografías a formato JSON.
        const photos = await photosRes.json();

        // Mapeamos el arreglo de usuarios para transformar su estructura e incluirle sus datos asociados. Soluciona el requerimiento de anidar los datos en cada usuario.
        const consolidatedData = users.map(user => {
            // Filtramos los álbumes que pertenecen al usuario actual comparando el userId.
            const userAlbums = albums.filter(album => album.userId === user.id);
            
            // Mapeamos los álbumes del usuario para anidarles sus respectivas fotografías.
            const albumsWithPhotos = userAlbums.map(album => {
                // Filtramos las fotos que pertenecen al álbum actual comparando el albumId y retornamos el objeto del álbum estructurado.
                return {
                    ...album, // Clonamos los datos base del álbum.
                    photos: photos.filter(photo => photo.albumId === album.id) // Anidamos sus fotos correspondientes.
                };
            });

            // Filtramos los posts que pertenecen al usuario actual comparando el userId.
            const userPosts = posts.filter(post => post.userId === user.id);
            
            // Mapeamos los posts del usuario para anidarles sus respectivos comentarios.
            const postsWithComments = userPosts.map(post => {
                // Filtramos los comentarios que pertenecen al post actual comparando el postId y retornamos el objeto estructurado.
                return {
                    ...post, // Clonamos los datos base del post.
                    comments: comments.filter(comment => comment.postId === post.id) // Anidamos sus comentarios correspondientes.
                };
            });

            // Retornamos el objeto final del usuario con todos los niveles de anidación completados.
            return {
                ...user, // Clonamos los datos base del usuario.
                posts: postsWithComments, // Asignamos los posts (que ya tienen comentarios anidados).
                albums: albumsWithPhotos // Asignamos los álbumes (que ya tienen fotos anidadas).
            };
        });

        // Mostramos un mensaje de éxito en la consola.
        console.log("\n=== DATOS CONSOLIDADOS CON ÉXITO ===");
        // Imprimimos la estructura completa en consola transformando el objeto a string. Mostramos solo el primer usuario para no saturar la terminal (puedes cambiarlo a consolidadData completo si lo prefieres).
        console.log(JSON.stringify(consolidatedData, null, 2));
        
        

    } catch (error) {
        // Capturamos cualquier error en el proceso asíncrono o de procesamiento.
        console.error("\nOcurrió un error en el Punto 5:", error.message);
    }
};