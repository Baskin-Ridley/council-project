CREATE TABLE landscape (
    landscape_id SERIAL NOT NULL,
    posting_date DATE DEFAULT (current_timestamp AT TIME ZONE 'GMT'),
    img_url VARCHAR(500),
    activity_date DATE,
    user_id SERIAL NOT NULL,
    content VARCHAR(255) NOT NULL,
    PRIMARY KEY(landscape_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);
