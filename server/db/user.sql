DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_pic VARCHAR(255),
    UserName VARCHAR(255) NOT NULL,
    job_id VARCHAR(255) []
);
