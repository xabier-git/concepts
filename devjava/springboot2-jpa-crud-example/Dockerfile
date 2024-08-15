#De la imagen que partimos
FROM openjdk:11
 
#Directorio de trabajo
WORKDIR /opt/app

#Crea variable de entorno
ARG JAR_FILE=target/springboot2-jpa-crud-example-0.0.1-SNAPSHOT.jar
 
#Copiamos el jar en el directorio de trabajo
# cp target/springboot2-jpa-crud-example-0.0.1-.jar /opt/app/app.jar
COPY ${JAR_FILE} app.jar
 
#Exponemos el puerto 8080
EXPOSE 8080

RUN apt-get update && apt-get install -y iputils-ping

#Comentar ambas para usar compose
#CMD java -jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]


# Levantar servicio en un contenedor (sin compose)
# docker build -t springboot-crud-image:latest -f ./Dockerfile .
# Enlace de port tomcat server(spring app) 8080 a linux server(container) 8080
# docker run -p 8080:8080 --name springboot-crud-nginx2 -d springboot-crud-image:latest 
# http://localhost:8080/springboot-crud-rest/api/v1/employees

#Enlazar contenedor(spring) con db(mysql), e ingresa a la consulta
#docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=almaveloz --mount src=mysql-data,dst=/var/lib/mysql --name mysqlContainer mysql:5.7
#docker run -d -it -p 8080:8080 --link mysqlContainer:mysqlserver --name springboot-crud-client springboot-crud-image
# Desde Windoes
#http://192.168.197.164:8080/springboot-crud-rest/api/v1/employees
# Desde Ubuntu(WSL)
#curl http://localhost:8080/springboot-crud-rest/api/v1/employees