# Documentación del Proceso: Desarrollo de la Guía

En este apartado documento mi proceso paso a paso desarrollando la guía.
A continuación, el registro detallado de las actividades realizadas:

---

1. **Creación del repositorio:**
   Inicié creando el repositorio remoto en GitHub para alojar el proyecto.

2. **Enlace del entorno local:**
   Vinculé el repositorio con mi entorno local a través de la terminal de Git Bash.

3. **Gestión de ramas base:**
   Creé y me posicioné en la rama principal (`main`) para llevar el control de versiones inicial.

4. **Estructura base de archivos:**
   Agregué los archivos principales que conforman la arquitectura del proyecto:
   - El archivo de barril (`index.js`) para centralizar las exportaciones.
   - La carpeta `modules/` con los archivos de cada punto (`Punto1.js` a `Punto5.js`).
   - El punto de entrada principal (`app.js`).

5. **Creación de la rama de desarrollo:**
   Creé la rama `develop` para centralizar la integración de las nuevas funcionalidades.

6. **Inicio de características (Features):**
   A partir de `develop`, creé la rama `feature/menu-interactivo` para trabajar de forma aislada y agregar el menú interactivo.

7. **Documentación del proyecto:**
   Añadí el archivo `README.md` para establecer la presentación y las instrucciones generales del repositorio.

8. **Integración del menú:**
   Realicé la fusión (`merge`) de `feature/menu-interactivo` hacia `develop` y subí los cambios al repositorio remoto (`git push`).

9. **Sincronización del entorno local:**
   Sincronicé la rama `develop` en mi máquina local para asegurarme de contar con la versión más reciente antes de continuar.

10. **Creación de la rama para el Punto 1:**
    A partir de `develop`, creé y me posicioné en la rama `feature/punto1-tareas` para dar solución al primer requerimiento.

11. **Desarrollo del Punto 1 — Agrupación de tareas:**
    Implementé la lógica en `Punto1.js` usando `fetch` para obtener tareas de la API, filtré las que tenían `completed: false` y las agrupé por `userId`.

12. **Fusión y publicación del Punto 1:**
    Uní la rama `feature/punto1-tareas` hacia `develop` mediante `merge` y subí los cambios al repositorio remoto.

13. **Creación de la rama para el Punto 2:**
    A partir de `develop`, creé la rama `feat/punto2` para aislar el desarrollo del segundo requerimiento.

14. **Resolución y publicación del Punto 2:**
    Implementé la lógica del Punto 2, verifiqué su funcionamiento, realicé el `merge` hacia `develop` y subí los cambios.

15. **Actualización de archivos pendientes — 14/09/2026:**
    Recuperé archivos que no se habían subido correctamente, incluyendo este documento `.md`, y actualicé tanto `main` como `develop`.

16. **Desarrollo y publicación del Punto 4 — 15/09/2026:**
    Creé la rama `feature/punto4` a partir de `develop` para implementar el cuarto requerimiento. Una vez finalizado y verificado, subí los cambios al repositorio remoto y realicé el `merge` hacia `develop`.