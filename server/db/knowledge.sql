CREATE TABLE knowledge (
    knowledge_id SERIAL NOT NULL,
    posting_date DATE DEFAULT (current_timestamp AT TIME ZONE 'GMT'),
    title VARCHAR(500) NOT NULL,
    img_url VARCHAR(500),
    user_id SERIAL NOT NULL,
    content VARCHAR(255) NOT NULL,
    PRIMARY KEY(knowledge_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);
