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
| 3 | Filtrar posts por nombre y agregar comentarios | ✅  |
| 4 | Consultar usuarios (nombre y teléfono) | ✅  |
| 5 | Consultar todos los datos anidados en una sola petición | ✅ |

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

Al ejecutar, verás el siguiente menú interactivo escoje el ejercicio de tu preferencia:

    ("1. Listar tareas pendientes por usuario");
    ("2. Buscar usuario, álbumes y fotografías");
    ("3. Filtrar posts por nombre y agregar comentarios");
    ("4. Consultar usuarios (modificar respuesta: nombre y teléfono)");
    ("5. Consultar todos los datos anidados en una sola petición");
    ("0. Salir del programa");

```
