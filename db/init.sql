CREATE TABLE artUsers (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(40),
    password VARCHAR(100),
    user_points INT,
    art_count INT, 
    profile_description VARCHAR(1500), 
    profile_picture TEXT
    );
CREATE TABLE artPosts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description TEXT,
    image TEXT,
    post_points INT,
    user_id INT REFERENCES artUsers(user_id)
    );
CREATE TABLE artPostComments (
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    comment_points INT,
    post_id INT REFERENCES artPosts(post_id),
    user_id INT REFERENCES artUsers(user_id)
    );


-- ALTER TABLE artUsers
-- ADD art_count INT, profile_description VARCHAR(1500), 
-- profile_picture TEXT