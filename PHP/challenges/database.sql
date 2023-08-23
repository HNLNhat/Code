CREATE DATABASE challenges;
USE challenges;
CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    content TEXT NOT NULL
);