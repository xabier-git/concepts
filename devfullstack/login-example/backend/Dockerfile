FROM node:20

# Instala netcat-openbsd específicamente (en lugar del paquete virtual netcat)
RUN apt-get update && \
    apt-get install -y netcat-openbsd && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#CMD [ "node", "server.js" ]
# Agrega este comando para ejecutar el script después que MongoDB esté listo
CMD ["sh", "-c", "while ! nc -z mongo 27017; do sleep 1; done && node initAdmin.js && node server.js"]