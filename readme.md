# 📡 Documentacion de Asincronia — JSONPlaceholder API

 **Tecnología en Análisis y Desarrollo de Software**   
Implementa cinco funcionalidades que consumen la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) usando **JavaScript con Node.js**, asincronía con `async/await` y arquitectura modular.

---

## 📋 Información General

| Campo | Detalle |
|---|---|
| **Programa** | Técnico en Programación de Software |
| **Ficha** | 3234206 |
| **Instructor** | John Freddy Becerra Castellanos |
| **Fecha de entrega** | 15-08-2026 |
| **API utilizada** | https://jsonplaceholder.typicode.com/ |

---

## 🚀 Funcionalidades

| # | Funcionalidad | Estado |
|---|---|---|
| 1 | Listar tareas pendientes por usuario | ✅ |
| 2 | Buscar usuario, álbumes y fotografías por username | ✅ |
| 3 | Filtrar posts por nombre y agregar comentarios | 🚧 En desarrollo |
| 4 | Consultar usuarios (nombre y teléfono) | 🚧 En desarrollo |
| 5 | Consultar todos los datos anidados en una sola petición | 🚧 En desarrollo |

---

## 📁 Estructura del Proyecto

```
Asincronia-Evaluacion/
├── modules/
│   ├── Punto1.js       # Tareas pendientes por usuario
│   ├── Punto2.js       # Búsqueda por username con álbumes y fotos
│   ├── Punto3.js       # Filtrar posts con comentarios
│   ├── Punto4.js       # Usuarios con nombre y teléfono
│   └── Punto5.js       # Datos anidados completos
├── app.js              # Punto de entrada — menú interactivo
├── index.js            # Archivo barril — exporta todos los módulos
├── bitacora.md         # Registro del proceso de desarrollo paso a paso
├── package.json
└── README.md
```

### Rol de cada archivo

- **`index.js`** — Archivo barril: centraliza y re-exporta todas las funciones de los módulos. Es el único archivo que importa `app.js`.
- **`app.js`** — Punto de entrada principal. Muestra el menú interactivo, recibe la opción del usuario y delega la ejecución al módulo correspondiente.
- **`modules/PuntoN.js`** — Cada archivo contiene una única función exportada que encapsula su caso de uso específico.
- **`bitacora.md`** — Registro cronológico del proceso de desarrollo: creación del repositorio, gestión de ramas, implementación de cada punto y sincronización con el repositorio remoto.

---

## ⚙️ Requisitos Previos

- [Node.js](https://nodejs.org/) v18 o superior (requerido para `fetch` nativo y `readline/promises`)
- npm (incluido con Node.js)
- Conexión a internet (para consumir la API)

Verifica tu versión de Node:
```bash
node -v
```

---

## 📦 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/Asincronia-Evaluacion.git

# 2. Entra a la carpeta del proyecto
cd Asincronia-Evaluacion

# 3. Instala las dependencias
npm install
```

---

## ▶️ Uso

```bash
node app.js
```

Al ejecutar, verás el siguiente menú interactivo:

```
==================================================
         EVALUACION DE ASINCRONIA BIENVENIDO :)
==================================================
1. Listar tareas pendientes por usuario
2. Buscar usuario, álbumes y fotografías
3. Filtrar posts por nombre y agregar comentarios
4. Consultar usuarios (modificar respuesta: nombre y teléfono)
5. Consultar todos los datos anidados en una sola petición
0. Salir del programa
==================================================
Digita el numero del ejercicio que deseas ejecutar:
```

Escribe el número del ejercicio que deseas ejecutar y presiona **Enter**.

---

## 🔍 Descripción de Módulos

### Punto 1 — Tareas pendientes por usuario
**Archivo:** `modules/Punto1.js`  
Consulta el endpoint `/todos`, filtra las tareas con `completed: false` y las agrupa por `userId`. Muestra en terminal cuántas tareas pendientes tiene cada usuario.

```
Usuario ID: 1 (16 tareas pendientes)
   1. delectus aut autem
   2. quis ut nam facilis...
```

---

### Punto 2 — Búsqueda por username con álbumes y fotos
**Archivo:** `modules/Punto2.js`  
Solicita un `username` por teclado. Consulta `/users`, encuentra el usuario que coincide, luego obtiene sus álbumes desde `/albums?userId=` y las fotos de cada álbum desde `/photos?albumId=`. Muestra todo anidado.

---

### Punto 3 — Filtrar posts con comentarios *(en desarrollo)*
**Archivo:** `modules/Punto3.js`  
Solicita un nombre por teclado, filtra los posts cuyo `title` coincida y agrega los comentarios de cada post desde `/comments?postId=`.

---

### Punto 4 — Usuarios con nombre y teléfono *(en desarrollo)*
**Archivo:** `modules/Punto4.js`  
Consulta todos los usuarios y devuelve un nuevo arreglo que solo contiene `name` y `phone` de cada uno.

---

### Punto 5 — Datos anidados completos *(en desarrollo)*
**Archivo:** `modules/Punto5.js`  
Realiza una única petición inicial de usuarios y luego enriquece cada uno con: posts → comentarios de cada post → álbumes → fotos de cada álbum. Cada línea está comentada explicando su propósito.

---

## 🛠️ Tecnologías Utilizadas

- **JavaScript (ES Modules)** — Sintaxis `import/export`
- **Node.js** — Entorno de ejecución
- **`fetch`** — API nativa de Node.js v18+ para peticiones HTTP
- **`readline/promises`** — Entrada de datos por teclado de forma asíncrona
- **`async/await`** — Manejo de asincronía
- **`try/catch`** — Control de errores en cada petición

---

## 🌿 Control de Versiones — Ramas

```
main        ← versión estable y funcional
develop     ← integración de nuevas funcionalidades
feature/    ← ramas individuales por ejercicio (ej: feature/punto1)
```

### Convención de commits

```
feat: agrega funcionalidad de listado de tareas pendientes
fix: corrige filtro de posts por nombre
docs: actualiza README con instrucciones de uso
refactor: mejora estructura del módulo Punto5
```

---

## 📄 Licencia

Proyecto académico — SENA Centro Industrial de Mantenimiento Integral (CIMI).  
Uso educativo únicamente.
