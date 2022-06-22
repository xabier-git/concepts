create database timeline;

use timeline;

show databases;

create user 'timeline'@'localhost' identified by 'password';

grant all on timeline.* to 'timeline'@'localhost';

create table events (
  id INT AUTO_INCREMENT,
  owner VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE,
  PRIMARY KEY (id),
  INDEX (owner, date)
);


ALTER USER 'timeline'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;


INSERT INTO events (owner, name, description, date) VALUES ('yo','javier','desc',NULL);
SELECT id, name, description, date FROM events;
UPDATE events SET date=CURDATE() WHERE id=1 AND owner='yo'
