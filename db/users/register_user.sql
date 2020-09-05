INSERT INTO artUsers
(username, password, user_points, art_count)
VALUES
($1, $2, 0, 0)
RETURNING *