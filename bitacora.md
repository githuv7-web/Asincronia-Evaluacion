# Documentación del Proceso: Desarrollo de la Guía

En este apartado documento mi proceso paso a paso desarrollando la guía. A continuación, el registro detallado de las actividades realizadas:

1. **Creación del repositorio:** Inicié creando el repositorio remoto en GitHub para alojar el proyecto.
2. **Enlace del entorno local:** Vinculé el repositorio con mi entorno local a través de la terminal de Git Bash.
3. **Gestión de ramas base:** Creé y me posicioné en la rama principal (`main`) para llevar el control de versiones inicial.
4. **Estructura base de archivos:** Agregué los archivos principales que conforman la arquitectura del proyecto, los cuales incluyen:
   - El archivo de barril (`index.js`) para centralizar las exportaciones.
   - La carpeta `modules/` con los archivos de cada punto (`Punto1.js` a `Punto5.js`).
   - El punto de entrada principal (`app.js`).
5. **Creación de la rama de desarrollo:** Creé la rama `develop` para centralizar la integración de las nuevas funcionalidades.
6. **Inicio de características (Features):** A partir de `develop`, creé la rama `feature/menu-interactivo` para trabajar de forma aislada y agregar el menú interactivo.
7. **Documentación del proyecto:** Añadí el archivo `README.md` para establecer la presentación y las instrucciones generales del repositorio.
8. **Integración del menú:** Realicé la fusión (`merge`) de la rama `feature/menu-interactivo` hacia la rama `develop` y subí los cambios actualizados al repositorio remoto en GitHub (`git push`).
9. **Sincronización del entorno local:** Sincronicé la rama `develop` en mi máquina local para asegurarme de contar con la versión más reciente del código antes de continuar.
10. **Creación de la rama para el Punto 1:** A partir de `develop`, creé y me posicioné en una nueva rama llamada `feature/punto1-tareas` para dar solución al primer requerimiento de la guía.
11. **Desarrollo del Punto 1 (Agrupación de tareas):** Implementé la lógica en `Punto1.js` utilizando `fetch` para obtener las tareas de la API. Filtré aquellas cuya propiedad `completed` estuviera en `false` y realicé una agrupación por ID de usuario (`userId`) para mostrar las tareas pendientes correspondientes a cada uno.
12. **Fusión y publicación del Punto 1:** Uní nuevamente la rama `feature/punto1-tareas` hacia `develop` mediante un `merge` y subí los cambios finales al repositorio remoto.
13. **Creación de la rama para el Punto 2:** A partir de `develop`, creé una nueva rama llamada `feat/punto2` para aislar el entorno de trabajo del segundo requerimiento.
14. **Resolución y publicación del Punto 2:** Resolví la lógica correspondiente al segundo punto de la guía. Al finalizar y verificar su funcionamiento, realicé la fusión (`merge`) de esta rama hacia `develop` y subí los cambios al repositorio remoto.
15. **Actualización de archivos pendientes (14/09/2026):** El día de hoy recuperé algunos archivos que no se habían subido correctamente en su momento, incluyendo este documento Markdown (`.md`), y procedí a subirlos asegurándome de actualizar tanto la rama `main` como `develop`.