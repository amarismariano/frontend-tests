# Frontend Automation Testing Project

## 📖 **Descripción del Proyecto**

Este proyecto contiene una serie de **tests automatizados** diseñados para validar las funcionalidades del frontend de una aplicación web creada en **Vue.js** y alojada en **StackBlitz**. Los tests se desarrollaron utilizando **Playwright**, un potente framework de automatización que permite interactuar con aplicaciones web en diferentes navegadores y escenarios.

### 🌟 **Funcionalidades Probadas**

1. **Validación de Tarjetas:**
   - Comprueba que las tarjetas en la página principal contienen el nombre, una imagen, y un enlace con el texto "Ver detalle".
2. **Navegación:**
   - Valida que el botón "Home" redirige correctamente a la página principal.
   - Comprueba que el botón "Top" desplaza la página hacia el inicio.
3. **Vista de Personajes:**
   - Verifica que al hacer clic en "Ver detalle", se redirige a la página del personaje y que esta contiene el nombre, género, especie, y estado del personaje.
4. **Configuración Inicial:**
   - Maneja el caso en el que aparece el botón **"Run this project"** antes de cargar la aplicación principal, haciendo clic automáticamente en dicho botón.

---

## 💡 **Razón de Ser**

Este proyecto fue creado para demostrar cómo aplicar herramientas modernas de automatización de pruebas en aplicaciones web, con el objetivo de:

- Garantizar la calidad y funcionalidad del frontend.
- Probar de manera eficiente flujos de navegación, interacción y contenido dinámico.
- Simplificar el proceso de detección de errores en una aplicación frontend.

---

## 🛠 **Guía para Configuración y Ejecución Local**

Sigue estos pasos para descargar y ejecutar los tests en tu máquina local:

### 1️⃣ **Pre-requisitos**

- Node.js (v18.0.0 o superior)
- npm o yarn (administrador de paquetes)
- Navegador Chromium (opcional, Playwright lo instalará automáticamente)

### 2️⃣ **Clonar el Repositorio**

```bash
git clone <(https://github.com/amarismariano/frontend-tests)>
cd <frontend-tests>
```

3️⃣ Instalar Dependencias
npm install

4️⃣ Instalar los Navegadores
Playwright requiere la instalación de los navegadores que se usarán para las pruebas:
npx playwright install

🚀 Cómo Ejecutar los Tests
npx playwright test

Al ejecutar los tests, estos se ejecutaran 1 x 1, dado que la API/url que estamos usando al ser paga, se necesita de un click en la pagina para proseguir

