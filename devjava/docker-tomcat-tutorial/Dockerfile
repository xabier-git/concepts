FROM tomcat:8.0-alpine
LABEL maintainer="deepak@softwareyoga.com"

ADD sample.war /usr/local/tomcat/webapps/

EXPOSE 8080
CMD ["catalina.sh", "run"]

#docker build -t docker-tomcat-image .
#docker run -p 80:8080 --name mywebapp docker-tomcat-image
#http://localhost:80/

