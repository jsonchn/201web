DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50),
    Passkey VARCHAR(100),
    Email VARCHAR(50),
    Balance DECIMAL(13,2)
);

INSERT INTO Users VALUES(1, 'jsnchn', '1234qwer', 'jsnchn@outlook.com', 50000)