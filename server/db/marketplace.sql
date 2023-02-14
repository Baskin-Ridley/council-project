CREATE TABLE marketplace (
    marketplace_id SERIAL NOT NULL,
    posting_date DATE DEFAULT (current_timestamp AT TIME ZONE 'GMT'),
    activity_date DATE,
    user_id SERIAL NOT NULL,
    PRIMARY KEY(marketplace_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);
