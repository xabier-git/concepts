#FROM node:latest as node
FROM node:10-alpine as node

ARG ENV=prod
ARG APP=angular-nginx-docker

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

# docker build -t ng-docker-app:v1.0.0 -f ./Dockerfile .
# docker run -p 8000:80 -d ng-docker-app:v1.0.0