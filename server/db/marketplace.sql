CREATE TABLE marketplace (
    marketplace_id SERIAL NOT NULL,
    posting_date DATE DEFAULT (current_timestamp AT TIME ZONE 'GMT'),
    title VARCHAR(500) NOT NULL,
    content VARCHAR(500) NOT NULL,
    img_url VARCHAR(500),
    activity_date DATE,
    user_id SERIAL NOT NULL,
    isAvailable BOOLEAN NOT NULL DEFAULT TRUE,
    PRIMARY KEY(marketplace_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Insert sample data into the marketplace table
