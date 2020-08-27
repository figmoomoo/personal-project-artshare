INSERT INTO artUsers
(username, password, user_points)
VALUES
($1, $2, 0)
RETURNING *