FROM httpd:alpine

MAINTAINER Xabier <gatoencerrado@gmail.com>

# Remove any files that may be in the public htdocs directory already.
RUN rm -r /usr/local/apache2/htdocs/*

# Copy all the files from the docker build context into the public htdocs of the apache container.
COPY ./ /usr/local/apache2/htdocs/

#docker build -f Dockerfile -t angular-apache-img:0.1 dist/angular-app/
#docker run -d -p 8080:80 --name sample-app angular-apache-img:0.1
#http://localhost:8080/
