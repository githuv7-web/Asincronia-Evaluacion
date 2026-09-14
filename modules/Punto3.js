// modules/Punto3.js
export const Punto3 = async (rl) => {
    try {
        // Solicitamos por teclado el "nombre" (título o parte de él) del post a buscar
        const titleSearch = await rl.question("\nDigita el título (o parte de él) del post a buscar: ");
        
        // Realizamos la petición para obtener todos los posts
        const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!postsRes.ok) throw new Error(`Error en la petición de posts: ${postsRes.status}`);
        const posts = await postsRes.json();

        // Filtramos los posts cuyo título contenga la cadena ingresada (ignorando mayúsculas/minúsculas)
        const filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(titleSearch.toLowerCase().trim())
        );

        if (filteredPosts.length === 0) {
            console.log("\nNo se encontraron posts que coincidan con ese texto.");
            return;
        }

        // Realizamos la petición para obtener los comentarios
        const commentsRes = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!commentsRes.ok) throw new Error(`Error en la petición de comentarios: ${commentsRes.status}`);
        const allComments = await commentsRes.json();

        // Agregamos los comentarios correspondientes a cada post filtrado comparando el postId
        const postsWithComments = filteredPosts.map(post => {
            return {
                ...post, // Esparcimos los datos originales del post
                comments: allComments.filter(comment => comment.postId === post.id) // Filtramos sus comentarios
            };
        });

        // Imprimimos el resultado de forma clara
        console.log("\n=== POSTS ENCONTRADOS Y SUS COMENTARIOS ===");
        console.log(JSON.stringify(postsWithComments, null, 2));

    } catch (error) {
        // Manejo de errores
        console.error("\nOcurrió un error al ejecutar el Punto 3:", error.message);
    }
};