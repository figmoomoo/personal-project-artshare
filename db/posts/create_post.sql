INSERT INTO artPosts
(title, description, image, post_points, user_id)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;