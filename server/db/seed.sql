
INSERT INTO
    users (
        username,
        password,
        profile_pic,
        job_id,
        user_email,
        isAdmin
    )
VALUES
    (
        'BearNecessities',
        'password1',
        'https://placebear.com/200/200',
        ARRAY ['job1', 'job2'],
        ':@@@@@',
        FALSE
    ),
    (
        'PurrfectMatch',
        'password2',
        'https://placekitten.com/200/200',
        ARRAY ['job2', 'job3'],
        ':@@@@@',
        FALSE
    ),
    (
        'Clawverfield',
        'adminpassword',
        'https://placebear.com/200/200',
        ARRAY ['job1', 'job3'],
        ':@@@@@',
        TRUE
    );

INSERT INTO
    marketplace (
        posting_date,
        title,
        content,
        img_url,
        activity_date,
        user_id,
        isAvailable
    )
VALUES
    (
        '2023-02-15',
        'Brand new keyboard for sale',
        'Giving away my brand new mechanical keyboard. It has Cherry MX Brown switches and customizable RGB lighting. Comes with a detachable cable and keycap puller. Asking $100.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/RK68.jpg/1920px-RK68.jpg',
        '2023-02-17',
        1,
        TRUE
    ),
    (
        '2023-02-14',
        'Gently used sofa',
        'Giving away my gently used sofa. It is 3 years old and has some wear and tear, but is still very comfortable. Comes with two throw pillows. Asking $200.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2009-05-16_Main_office_lobby_at_Hampton_Forest_Apartments.jpg/1920px-2009-05-16_Main_office_lobby_at_Hampton_Forest_Apartments.jpg',
        '2023-02-16',
        2,
        TRUE
    ),
    (
        '2023-02-13',
        'Retro gaming console',
        'Giving away my retro gaming console. It has 30 classic games built in, including Super Mario Bros. and Pac-Man. Comes with two controllers and all necessary cables. Asking $50.',
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/Game-Boy-Advance-SP-Mk1-Blue.jpg',
        '2023-02-15',
        3,
        FALSE
    ),
    (
        '2023-02-12',
        'Handmade pottery vase',
        'Giving away my handmade pottery vase. It is one-of-a-kind and would make a great addition to any home. Measures 10 inches tall and 6 inches wide. Asking $75.',
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Portland_Vase_V%26A.jpg',
        '2023-02-14',
        2,
        TRUE
    ),
    (
        '2023-02-11',
        'Electric guitar',
        'Giving away my electric guitar. It is in excellent condition and has a great sound. Comes with a soft case and a strap. Asking $300.',
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Gibson_Les_Paul_54_Custom.jpg',
        '2023-02-14',
        1,
        TRUE
    ),
    (
        '2023-02-11',
        'Billy the G.O.A.T',
        'Giving away my Billy the goat. It is in excellent condition and has a great sound, he likes to nibble on your ears whilst you are sleeping. Comes with a leash and a portable toilet. Asking for $300.',
        'https://www.vhv.rs/dpng/d/11-115440_funny-goat-png-transparent-png.png',
        '2023-02-14',
        1,
        TRUE
    );

INSERT INTO landscape (title, img_url, activity_date, user_id, content)
VALUES 
  ('Join us for our weekly community garden event', 'https://placebear.com/500/500', '2023-02-21', 1, 'Come join us for a fun day of gardening in our community garden! We will be planting flowers and vegetables, and we could use your help.'),
  ('Litter picking event in the park', 'https://placekitten.com/500/500', '2023-03-05', 2, 'Help keep our community clean by joining us for a litter picking event in the local park. We will provide gloves and bags. Hope to see you there!'),
  ('Volunteers needed for neighborhood cleanup day', 'https://placebear.com/500/500', '2023-04-02', 3, 'Our neighborhood cleanup day is coming up, and we need volunteers to help us pick up litter and beautify the area. It will be a great opportunity to meet your neighbors and make a positive impact.');
