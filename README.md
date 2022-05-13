# Face join - Clon de Google Meet

Este es un ejemplo de una aplicacion web para videollamadas en donde puedes crear o conectarte a una sala de manera facíl, esta hecha con [Twilio Video](https://www.twilio.com/docs/video) y [React js](https://reactjs.org/)

## Preparando la aplicación

Para ejecutar la aplicacion debes tener una [cuenta de Twilio](https://www.twilio.com/try-twilio), tener instalado en tu equipo Node.js (Preferentemente versión 14) y NPM.

Descarga el repositorio:

```bash
git clone https://github.com/pablogallardodev/face-join.git
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

Necesitará el SID de su cuenta de Twilio, el cuál puede encontrar en su [consola de Twilio](https://www.twilio.com/console). Agréguelo al archivo `.env` (REACT_APP_TWILIO_ACCOUNT_SID).

También es necesario crear una `API key` y un `secret`, los cuales puede generar en la [consola de Video Twilio](https://www.twilio.com/console/video/project/api-keys). Cree una clave y también añadalas al archivo `.env` (REACT_APP_TWILIO_API_KEY, REACT_APP_TWILIO_API_SECRET).

## Ejecutando la aplicación

Una vez completado lo mencionado anteriormente, puede ejecutar la aplicación con:

```bash
npm run start
```

Esto se abrirá en su navegador en [localhost:3000](http://localhost:3000).

## Desplegar app (opcional)

Si deseas desplegar el app en un servidor de Twilio, puedes seguir el siguiente [manual](https://www.twilio.com/docs/labs/serverless-toolkit/guides/continous-deployment), con el cuál podras realizar un despliegue con facilidad.

## Menciones

Este proyecto es realizado en base a un Hackathon, el cuál, ha sido lanzado por Miguel Ángel Durán (midudev), a quíen puedes encontrar en directos en [Twich](https://twitch.tv/midudev)