# Face join - Clon de Google Meet

Este es un ejemplo de una aplicacion web para videollamadas en donde puedes crear o conectarte a una sala de manera facíl, esta hecha con [Twilio Video](https://www.twilio.com/docs/video) y [React js](https://reactjs.org/)

## Preparando la aplicación

Para ejecutar la aplicacion debes contar con una [cuenta de Twilio](https://www.twilio.com/try-twilio), tener instalado en tu equipo Node.js (Preferentemente versión 14) y NPM.

Descarga el repositorio:

```bash
git clone https://github.com/pablogallardodev/face-join.gittwilio-video-react-hooks.git
cd face-join
```

Instala las dependencias:

```bash
npm install
```

Crea un archivo `.env` a partir del archivo `.env.example`.

```bash
cp .env.example .env
```

### Variables .env

Necesitará el SID de su cuenta de Twilio, el cuál puede encontrar en su [consola de Twilio](https://www.twilio.com/console). Agréguelo al archivo `.env` (TWILIO_ACCOUNT_SID).

También es necesario crear una `API key` y un `secret`, los cuales puede generar en la [Programmable Video Tools in your console](https://www.twilio.com/console/video/project/api-keys). Cree una clave y también añadalas al archivo `.env` (TWILIO_API_KEY, TWILIO_API_SECRET).

## Ejecutando la aplicaciónRunning the application

Una vez completado lo mencionado anteriormente, puede ejecutar la aplicación con:

```bash
npm run dev
```

Esto se abrirá en su navegador en [localhost:3000](http://localhost:3000).