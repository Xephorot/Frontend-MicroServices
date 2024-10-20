
# Configuración del Frontend con React

Este repositorio contiene el código del **Frontend** desarrollado en **React**. Este frontend interactúa con los microservicios **Main** y **Admin**, por lo que es necesario que los contenedores de dichos microservicios estén activos para que funcione correctamente.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina antes de comenzar:
- **Node.js**: [Instalar Node.js](https://nodejs.org/)
- **Docker**: [Instalar Docker](https://docs.docker.com/get-docker/) (para los microservicios)

## Instrucciones Paso a Paso

### 1. Clonar el Repositorio

Clona el repositorio en tu máquina local utilizando Git.

```bash
git clone https://github.com/Xephorot/Frontend-MicroServices
```

### 2. Instalar Dependencias

Instala las dependencias necesarias del proyecto utilizando `npm` o `yarn`:

```bash
npm install
```

O si prefieres usar **yarn**:

```bash
yarn install
```

### 3. Asegurarse de que los Microservicios estén Corriendo

Este frontend depende de que los microservicios **Main** y **Admin** estén levantados y corriendo. Asegúrate de que los contenedores Docker para ambos servicios estén activos.

1. **Levantar los microservicios con Docker Compose**:

   Si aún no has levantado los contenedores de los microservicios, ejecuta el siguiente comando en las carpetas correspondientes de **Main** y **Admin**:

   ```bash
   docker-compose up --build
   ```

2. Verifica que los contenedores estén corriendo:

   ```bash
   docker ps
   ```

   Asegúrate de que los contenedores de **nest-main** y **nest-admin** estén activos.

### 4. Ejecutar el Frontend

Para ejecutar el servidor de desarrollo de React, usa el siguiente comando:

```bash
npm start
```

O si estás usando **yarn**:

```bash
yarn start
```

Este comando levantará el frontend y lo servirá en el puerto `4200` (o el puerto que esté configurado en el código).

### 5. Acceder al Frontend

Una vez que el frontend esté corriendo, puedes acceder a la aplicación en tu navegador:

```
http://localhost:4200
```

## Comandos Adicionales

- **Instalar dependencias**:
  ```bash
  npm install
  ```

- **Iniciar el servidor de desarrollo**:
  ```bash
  npm start
  ```

- **Compilar para producción**:
  ```bash
  npm run build
  ```