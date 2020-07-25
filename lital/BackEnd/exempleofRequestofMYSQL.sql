CREATE TABLE products
(
  id INT PRIMARY KEY NOT NULL
  AUTO_INCREMENT,
    name VARCHAR
  (100),
    reference VARCHAR
  (100),
    type VARCHAR
  (255),
    collection VARCHAR
  (255),
    brand VARCHAR
  (255),
    product_status VARCHAR
  (255),
    color VARCHAR
  (255),
    picture VARCHAR
  (255),
    location VARCHAR
  (255),
    box VARCHAR
  (255),
    quantity INT NOT NULL,
    comment VARCHAR
  (255)
);

  INSERT INTO products
    (name, type, collection, brand,product_status,color,picture,location,box,quantity,comment)
  VALUES
    ('RT3', 'sac', 'Summer 2020', 'Lital', 'Production', 'Rouge', "http://localhost:3000/lital-images/1.jpg", "Tunis", "Box", 12, "No comment for this product");
  ;

  CREATE TABLE history
  (
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT, date varchar
    (50),action VARCHAR
    (100),product_reference varchar
    (50),user_id INT);

    INSERT INTO users
      (first_name, last_name, email, username,password,post)
    VALUES
      ('Marwa', 'Azzabi', 'azzabi@gmail.com', 'Mar', 'admin', 'admin');
    (3,'Amira', 'Chaabane', 'chaabane@gmail.com', 'Ami','admin','admin'),
    (4,'Marwa', 'Azzabi', 'azzabi@gmail.com', 'Mar','admin','admin'),
    (5,'Amira', 'Chaabane', 'chaabane@gmail.com', 'Ami','admin','admin');


    INSERT INTO users
    SET
  first_name
    =newuser.first_name,
  last_name=newuser.last_name,
  email=newuser.email,
  password=newuser.password,
  post=newuser.post;

  
  "INSERT INTO users SET
first_name=newuser.first_name,last_name=newuser.last_name,email=newuser.email,password=newuser.password,post=newuser.post"

    ALTER TABLE Product 
CHANGE  id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT;
    ALTER TABLE Product
MODIFY id BIGINT NOT NULL AUTO_INCREMENT;



    ALTER TABLE products
ADD mesures VARCHAR(255);