### 🧪 Documento de Evaluación y Datos de Prueba

Este documento contiene la suite de pruebas manuales diseñadas para validar las 5 funcionalidades del proyecto mediante casos exitosos y casos de fallo controlado (*try/catch*).

#### 📊 Caso de Prueba 1: Tareas Pendientes por Usuario (`listarTareaPendiente.js`)
**Propósito:** Validar la obtención y agrupación de tareas en estado no completado.
**Procedimiento:** Seleccionar Opción 1 en el menú interactivo.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
| :--- | :--- | :--- | :--- |
| **Éxito (Camino Feliz)** | N/A (Consulta global) | Verifica la comunicación con `/todos` y el filtrado por `completed: false`[cite: 2]. | Muestra lista agrupada por `userId` indicando la cantidad de tareas pendientes por cada usuario[cite: 2]. |
| **Fallo Controlado** | Sin conexión a red | Simula la caída del servicio o fallo de red. | Bloque `try/catch` captura el error de `fetch` y muestra exactamente: *"Ocurrió un error al consultar las tareas: Error en la petición..."*[cite: 2]. |

#### 📊 Caso de Prueba 2: Búsqueda por Username (`agruparDatos_segun_Username.js`)
**Propósito:** Validar la búsqueda anidada de usuario, álbumes y fotos.
**Procedimiento:** Seleccionar Opción 2 e ingresar el valor por consola.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
| :--- | :--- | :--- | :--- |
| **Éxito** | `Bret` | Usuario válido existente en JSONPlaceholder. | Retorna el objeto del usuario, sus álbumes asociados y la lista de fotos por álbum[cite: 5]. |
| **Fallo (Validación)** | `usuario_inexistente` | Evalúa el manejo cuando la API retorna un arreglo vacío[cite: 5]. | Muestra mensaje controlado: *"❌ No se encontró ningún usuario con el username 'usuario_inexistente'"*[cite: 5]. |
| **Fallo (Entrada Inválida)** | `" "` (Vacío) | Valida el control de entradas no permitidas antes de hacer peticiones a la API[cite: 5]. | Muestra el mensaje: *"No ingresaste ningún username."* y retorna de inmediato a la función principal sin lanzar excepción[cite: 5]. |

#### 📊 Caso de Prueba 3: Filtrar Posts por Nombre (`filtrarPostPorNombre.js`)
**Propósito:** Validar coincidencia de texto en títulos de posts y recuperación de comentarios.
**Procedimiento:** Seleccionar Opción 3 e ingresar término de búsqueda.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
| :--- | :--- | :--- | :--- |
| **Éxito** | `sunt aut facere` | Cadena parcial/total contenida en el título de los posts. | Retorna los posts coincidentes integrando el arreglo de `comments` para cada uno[cite: 3]. |
| **Fallo (Sin Coincidencias)** | `xyz999_texto` | Valida cuando la lógica `.filter()` no encuentra resultados[cite: 3]. | Muestra exactamente el mensaje: *"No se encontraron posts que coincidan con ese texto."*[cite: 3]. |

#### 📊 Caso de Prueba 4: Usuarios Nombre y Teléfono (`consultarUser_NombreTelefono.js`)
**Propósito:** Evaluar la proyección / transformación de datos mediante `.map`.
**Procedimiento:** Seleccionar Opción 4 en el menú.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
| :--- | :--- | :--- | :--- |
| **Éxito** | N/A (Consulta global) | Confirma que se filtren los atributos innecesarios. | Muestra un arreglo formateado (`console.table`) donde únicamente existen las propiedades `name` y `phone`[cite: 4]. |
| **Fallo Controlado** | URL de API corrupta | Simula un endpoint `/users` erróneo en el código. | `try/catch` captura el status HTTP (ej. 404) e informa: *"Ocurrió un error al consultar los usuarios (Punto 4): Error al obtener usuarios:..."*[cite: 4]. |

#### 📊 Caso de Prueba 5: Datos Anidados Completos (`solicitarTodosUsuarios.js`)
**Propósito:** Verificar el enriquecimiento masivo de datos en cascada usando múltiples promesas (Posts → Comentarios, Álbumes → Fotos).
**Procedimiento:** Seleccionar Opción 5 en el menú.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
| :--- | :--- | :--- | :--- |
| **Éxito** | N/A (Petición múltiple) | Mide el tiempo de respuesta y la correcta integración (`Promise.all`) de los 5 endpoints[cite: 1]. | Objeto JSON completo generado con la estructura anidada y el mensaje *"=== DATOS CONSOLIDADOS CON ÉXITO ==="*[cite: 1]. |
| **Fallo (Timeout / Red)** | Interrupción de red | Probar la resiliencia y validación de `.ok` en las peticiones concurrentes[cite: 1]. | Captura la promesa rechazada en el bloque global sin detener la aplicación, mostrando: *"Ocurrió un error en el Punto 5: Una o más peticiones a la API fallaron."*[cite: 1]. |