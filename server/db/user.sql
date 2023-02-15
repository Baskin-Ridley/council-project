DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS agents;

CREATE TABLE users (
    user_id SERIAL NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_pic VARCHAR(255),
    job_id VARCHAR(255) [],
    isAdmin BOOLEAN DEFAULT FALSE NOT NULL,
    PRIMARY KEY (user_id)
);
