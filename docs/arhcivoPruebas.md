# 🧪 Documento de Evaluación y Datos de Prueba

Este documento contiene la suite de pruebas manuales diseñadas para validar las 5 funcionalidades del proyecto mediante casos exitosos y casos de fallo controlado (* try/catch *).

---

## 📊 Caso de Prueba 1: Tareas Pendientes por Usuario (`listarTareaPendiente.js`)

* **Propósito:** Validar la obtención y agrupación de tareas en estado no completado.
* **Procedimiento:** Seleccionar Opción 1 en el menú interactivo.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
|---|---|---|---|
| **Éxito (Camino Feliz)** | N/A (Consulta global) | Verifica la comunicación con `/todos` y el filtrado por `completed: false`. | Muestra lista agrupada por `userId` indicando la cantidad de tareas pendientes por cada usuario. |
| **Fallo Controlado** | Sin conexión a red | Simula la caída del servicio o fallo de red. | Bloque `try/catch` captura el error de `fetch` y muestra: `[Error]: No se pudieron obtener las tareas. Verifique su conexión.` |

---

## 📊 Caso de Prueba 2: Búsqueda por Username (`agruparDatos_segun_Username.js`)

* **Propósito:** Validar la búsqueda anidada de usuario, álbumes y fotos.
* **Procedimiento:** Seleccionar Opción 2 e ingresar el valor por consola.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
|---|---|---|---|
| **Éxito** | `Bret` | Usuario válido existente en JSONPlaceholder. | Retorna el objeto del usuario, sus álbumes asociados y la lista de fotos por álbum. |
| **Fallo (Validación/Negocio)** | `usuario_inexistente_123` | Evalúa el manejo cuando la API retorna un arreglo vacío. | Muestra mensaje controlado: `No se encontró ningún usuario con el username: usuario_inexistente_123`. |
| **Fallo (Entrada Inválida)** | `"   "` (Cadena vacía o espacios) | Valida el control de entradas no permitidas antes de la petición. | Dispara excepción en `try/catch`: `El username no puede estar vacío.` |

---

## 📊 Caso de Prueba 3: Filtrar Posts por Nombre (`filtrarPostPorNombre.js`)

* **Propósito:** Validar coincidencia de texto en títulos de posts y recuperación de comentarios.
* **Procedimiento:** Seleccionar Opción 3 e ingresar término de búsqueda.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
|---|---|---|---|
| **Éxito** | `sunt aut facere` | Cadena parcial/total contenida en el título de los posts. | Retorna los posts coincidentes integrando el arreglo de `comments` para cada uno. |
| **Fallo (Sin Coincidencias)** | `xyz999_texto_raro` | Valida cuando la API no encuentra coincidencias de filtro. | Muestra: `No se encontraron posts que coincidan con la búsqueda.` |

---

## 📊 Caso de Prueba 4: Usuarios Nombre y Teléfono (`consultarUser_NombreTelefono.js`)

* **Propósito:** Evaluar la proyección / transformación de datos mediante `map`.
* **Procedimiento:** Seleccionar Opción 4 en el menú.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
|---|---|---|---|
| **Éxito** | N/A (Consulta global) | Confirma que se filtren los atributos innecesarios. | Muestra un arreglo de objetos donde **únicamente** existen las propiedades `name` y `phone`. |
| **Fallo Controlado** | URL de API corrupta | Simula un endpoint `/users` erróneo en el código. | `try/catch` captura el status HTTP (ej. 404) e informa: `Error al consultar usuarios: HTTP status 404`. |

---

## 📊 Caso de Prueba 5: Datos Anidados Completos (`solicitarTodosUsuarios.js`)

* **Propósito:** Verificar el enriquecimiento masivo de datos en cascada (Posts → Comentarios, Álbumes → Fotos).
* **Procedimiento:** Seleccionar Opción 5 en el menú.

| Tipo de Prueba | Datos de Entrada | Razón de Selección | Resultado Esperado (Éxito / Fallo Controlado) |
|---|---|---|---|
| **Éxito** | N/A (Petición opcional compleja) | Mide el tiempo de respuesta y la estructura profunda del objeto final. | Objeto JSON completo generado con la estructura anidada de todos los recursos. |
| **Fallo (Timeout / Red)** | Interrupción de red a mitad del proceso | Probar la resiliencia en peticiones múltiples (`Promise.all`). | Captura la promesa rechazada en `try/catch` global sin que la aplicación colapse. |