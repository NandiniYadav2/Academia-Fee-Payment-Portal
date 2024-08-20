DROP DATABASE IF EXISTS Student_Fee_Payment;
CREATE DATABASE IF NOT EXISTS Student_Fee_Payment;
USE Student_Fee_Payment;

DROP TABLE IF EXISTS bill,
                     student,
                     student_bill,
                     student_payment; 
                     

CREATE TABLE bill (
  bill_id bigint NOT NULL AUTO_INCREMENT,
  amount int NOT NULL,
  bill_date datetime(6) NOT NULL,
  description varchar(255) DEFAULT NULL,
  PRIMARY KEY (bill_id)
); 

CREATE TABLE student (
  student_id bigint NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) DEFAULT NULL,
  roll_number int NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (student_id)
 );

CREATE TABLE student_bill (
  id bigint NOT NULL AUTO_INCREMENT,
  bill_id bigint DEFAULT NULL,
  student_id bigint DEFAULT NULL,
  PRIMARY KEY (id),
 
  CONSTRAINT  FOREIGN KEY (student_id) REFERENCES student (student_id),
  CONSTRAINT  FOREIGN KEY (bill_id) REFERENCES bill (bill_id)
) ;

CREATE TABLE student_payment (
  id bigint NOT NULL AUTO_INCREMENT,
  amount int NOT NULL,
  description varchar(255) DEFAULT NULL,
  payment_date datetime(6) NOT NULL,
  bill_id bigint DEFAULT NULL,
  student_id bigint DEFAULT NULL,
  PRIMARY KEY (id),
 
  CONSTRAINT  FOREIGN KEY (bill_id) REFERENCES bill (bill_id),
  CONSTRAINT  FOREIGN KEY (student_id) REFERENCES student (student_id)
);

INSERT INTO bill(bill_id,amount,bill_date,description)VALUES
('201', '200000', '2023-12-02 00:00:00.000000', 'Hostel Fee'),
('202', '750000', '2023-12-03 00:00:00.000000', 'Mess Fee'),
('203', '250000', '2023-12-04 00:00:00.000000', 'Tution Fee'),
('204', '200000', '2023-12-05 00:00:00.000000', 'Library Due'),
('205', '500000', '2023-12-01 00:00:00.000000', 'Bus Fee');




INSERT INTO student(student_id,email,first_name,last_name,roll_number,password)VALUES
('101', 'nandini@gmail.com', 'nandini', 'yadav', '2023096', 'aparna'),
('102', 'aparna@gmail.com', 'aparna', 'yadav', '2023097', 'nandini');


INSERT INTO student_bill(id,bill_id,student_id)VALUES
('301', '201', '101'),
('302', '202', '101'),
('303', '203', '102'),
('304', '204', '102'),
('305', '205', '102');


INSERT INTO student_payment(id,amount,description,payment_date,bill_id,student_id)VALUES
('401', '100000', 'Hostel Fee', '2023-12-06 00:00:00.000000', '201', '101'),
('402', '80000', 'Mess Fee', '2023-12-07 00:00:00.000000', '202', '101'),
('403', '200000', 'Tution Fee', '2023-12-09 00:00:00.000000', '203', '102'),
('404', '2000', 'Library Due', '2023-12-10 00:00:00.000000', '204', '102');

ALTER TABLE  student_payment
	ADD FOREIGN KEY (student_id) REFERENCES student (student_id);


SELECT * FROM Student_Fee_Payment.bill;
