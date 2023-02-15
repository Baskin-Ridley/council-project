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
INSERT INTO marketplace (title, content, img_url, user_id) VALUES
  ('iPhone X', 'Gently used iPhone X, 64GB storage, silver color', 'https://placebear.com/2000/3000', 1),
  ('Nintendo Switch', 'Barely used Nintendo Switch with Neon Blue and Neon Red Joy‑Con controllers', 'https://placebear.com/2000/2000', 2),
  ('Canon EOS R5', 'Brand new Canon EOS R5 with 45 Megapixel Full-frame CMOS Sensor', 'https://placebear.com/1750/2550', 3);
