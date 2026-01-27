# Web BOSPC

URL pública: https://dejoda.github.io/web-bospc/

## Desarrollo rápido

```
npm install
npm run dev
```

## Build y Deploy

```
npm run build
npm run deploy
```

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

