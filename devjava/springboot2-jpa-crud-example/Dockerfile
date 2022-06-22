#De la imagen que partimos
FROM openjdk:8-jre-alpine
 
#Directorio de trabajo
WORKDIR /opt/app

#Crea variable de entorno
ARG JAR_FILE=target/springboot2-jpa-crud-example-0.0.1-SNAPSHOT.jar
 
#Copiamos el jar en el directorio de trabajo
# cp spring-boot-web.jar /opt/app/app.jar
COPY ${JAR_FILE} app.jar
 
#Exponemos el puerto 8080
EXPOSE 8080
 
# java -jar /opt/app/app.jar
##ENTRYPOINT ["java","-jar","app.jar"]