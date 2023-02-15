CREATE TABLE library (
   
    title VARCHAR(500) NOT NULL,
   
    activity_date DATE
  
);

-- Insert sample data into the library table
INSERT INTO library (title, img_url, user_id, content) VALUES
  ('The Great Gatsby', 'https://placebear.com/200/300', 1, 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.'),
  ('To Kill a Mockingbird', 'https://placebear.com/200/200', 2, 'To Kill a Mockingbird is a novel by Harper Lee published in 1960.'),
  ('1984', 'https://placebear.com/200/300', 3, '1984 is a dystopian social science fiction novel by English novelist George Orwell.');
