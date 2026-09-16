export const agruparDatos_segun_Username = async (rl) => {
    try {
       
        const usernameInput = await rl.question("\nDigita el username del usuario a buscar (ej. Bret, Antonette, Samantha): ");
        const usernameLimpio = usernameInput.trim();

        if (!usernameLimpio) {
            console.log(" No ingresaste ningún username.");
            return;
        }

        console.log(`\n  Buscando usuario '${usernameLimpio}'...`);

        // 1. Consultar usuario filtrado por username
        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users?username=${usernameLimpio}`);
        if (!resUser.ok) throw new Error("Error al consultar la API de usuarios.");
        const usuarios = await resUser.json();

        if (usuarios.length === 0) {
            console.log(`❌ No se encontró ningún usuario con el username "${usernameLimpio}".`);
            return;
        }

        const usuario = usuarios[0];

        // 2. Consultar únicamente los álbumes de este usuario
        const resAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
        if (!resAlbums.ok) throw new Error("Error al consultar la API de álbumes.");
        const albumes = await resAlbums.json();

        // 3. Consultar las fotos asociadas a cada álbum de forma eficiente
        const albumesConFotos = await Promise.all(albumes.map(async (album) => {
            const resPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
            if (!resPhotos.ok) throw new Error(`Error al consultar fotos del álbum ${album.id}`);
            const fotos = await resPhotos.json();

            return {
                ...album,
                photos: fotos
            };
        }));

        const resultadoFinal = {
            ...usuario,
            albums: albumesConFotos
        };

        // Salida formateada en consola
        console.log("\n=======================================================");
        console.log("             INFORMACIÓN DEL USUARIO Y ÁLBUMES         ");
        console.log("=======================================================");
        console.log(` Nombre: ${resultadoFinal.name}`);
        console.log(` ID: ${resultadoFinal.id}`);
        console.log(` Username: ${resultadoFinal.username}`);
        console.log(` Email: ${resultadoFinal.email}`);
        console.log(` Teléfono: ${resultadoFinal.phone}`);
        console.log("-------------------------------------------------------");
        console.log(` ÁLBUMES ENCONTRADOS: ${resultadoFinal.albums.length}`);

        resultadoFinal.albums.forEach((album, indexAlbum) => {
            console.log(`\n    Álbum ${indexAlbum + 1}: ${album.title} (ID: ${album.id})`);
            console.log(`      Fotografías asociadas (${album.photos.length}):`);
            album.photos.forEach((foto, indexFoto) => {
                console.log(`      ${indexFoto + 1}. [Foto ID: ${foto.id}] ${foto.title}`);
                console.log(`         🔗 Link: ${foto.url}`);
            });
        });

    } catch (error) {
        console.error("\n Error durante la ejecución del Punto 2:", error.message);
    }
};