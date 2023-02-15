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

INSERT INTO users (username, password, profile_pic, job_id, isAdmin) VALUES
  ('johndoe', 'password123', 'https://placebear.com/100/100', '{123, 456}', FALSE),
  ('janedoe', 'password456', 'https://placebear.com/100/100', '{789, 101112}', TRUE),
  ('bobsmith', 'password789', 'https://placebear.com/100/100', '{131415, 161718}', FALSE);

