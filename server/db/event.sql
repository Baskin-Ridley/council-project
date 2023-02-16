CREATE TABLE event (
    e_name VARCHAR(255),
    e_date DATE,
    e_time TIME,
    e_location VARCHAR(255)
);

INSERT INTO event (e_name, e_date, e_time, e_location) VALUES 
('Hiking at local Park', '2023-02-20', '18:00:00', 'Location 1'),
('Concert', '2023-02-25', '19:30:00', 'Location 2'),
('Charity Fundraiser', '2023-03-05', '10:00:00', 'Location 3');