*************************************************************************************************************************************************************************************************************************************************
🔐 Variables de Entorno (.env)

Este proyecto utiliza un archivo .env para almacenar las credenciales necesarias para el funcionamiento de EmailJS.
Por razones de seguridad, este archivo no se incluye en el repositorio.

📌 Estructura del archivo .env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key

🔁 Al clonar el repositorio

Si al clonar el proyecto no se encuentra el archivo .env, deberá crearse manualmente en la raíz del proyecto con la estructura mostrada anteriormente.

Luego ejecutar:

npm install
npm run dev

🚀 Para preservar los cambios en producción

Una vez configurado el archivo .env y realizados los cambios en el proyecto:

npm run build
npm run deploy


Esto actualizará la versión publicada en GitHub Pages.

📤 Si deseas subir tus cambios al repositorio
git add .
git commit -m "Actualización del proyecto"
git push

✅ Buenas Prácticas

No subir el archivo .env al repositorio bajo ninguna circunstancia.

Mantener una copia segura de las credenciales de EmailJS.

Ejecutar siempre npm run build antes de npm run deploy.

Verificar el funcionamiento del proyecto en local (npm run dev) antes de desplegar.

Realizar commits con mensajes claros que describan los cambios realizados.

Evitar modificar directamente la rama gh-pages; los cambios deben provenir del comando deploy.


#CONDICIONES

Este proyecto utiliza EmailJS para gestionar el envío de correos electrónicos directamente desde el frontend, permitiendo que los mensajes del formulario de contacto sean enviados sin necesidad de implementar un servidor backend.
EmailJS facilita la integración de servicios de correo mediante plantillas y credenciales seguras, optimizando el desarrollo y mejorando la experiencia del usuario.
*************************************************************************************************************************************************************************************************************************************************


#-----------------------------------------------------------------------------------------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
