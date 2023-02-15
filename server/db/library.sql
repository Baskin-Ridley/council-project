CREATE TABLE library (
    library_id SERIAL NOT NULL,
    posting_date DATE DEFAULT (current_timestamp AT TIME ZONE 'GMT'),
    title VARCHAR(500) NOT NULL,
    img_url VARCHAR(500),
    activity_date DATE,
    user_id SERIAL NOT NULL,
    content VARCHAR(255) NOT NULL,
    PRIMARY KEY(library_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Insert sample data into the library table
INSERT INTO library (title, img_url, user_id, content) VALUES
  ('The Great Gatsby', 'https://placebear.com/200/300', 1, 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.'),
  ('To Kill a Mockingbird', 'https://placebear.com/200/200', 2, 'To Kill a Mockingbird is a novel by Harper Lee published in 1960.'),
  ('1984', 'https://placebear.com/200/300', 3, '1984 is a dystopian social science fiction novel by English novelist George Orwell.');
