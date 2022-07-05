#redefine nommbre contenedor a node (para referenciarlo abajo en el contenedor nginx)
#FROM node:latest as node 
FROM node:10-alpine as node

ARG ENV=prod
ARG APP=angular8-springboot-client

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /app
COPY ./ /app/

# Instala y construye el Angular App
RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

# Angular app construida, la vamos a hostear un server production, este es Nginx

FROM nginx:1.13.8-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t ng-docker-angular-nginx:v1.0.0 -f ./Dockerfile .
# docker run -p 8001:80 --name angular8-springboot-client -d ng-docker-angular-nginx:v1.0.0 
# http://localhost:8001