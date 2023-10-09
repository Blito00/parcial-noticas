# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios al contenedor
COPY package*.json ./
COPY app.js .

# Instala las dependencias
RUN npm install

# Expone el puerto 4000
EXPOSE 4000

# Inicia la aplicación cuando se inicie el contenedor
CMD ["node", "app.js"]
