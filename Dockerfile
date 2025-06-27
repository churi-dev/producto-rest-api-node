# Usa una imagen base de Node
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install --omit=dev

# Copia el resto del proyecto
COPY . .

# Expone el puerto (Render usa 10000+ puertos internos automáticamente)
EXPOSE 3000

# Comando para ejecutar tu app
CMD ["node", "src/app.js"]
