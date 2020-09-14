INSERT INTO artPostComments
(comment, post_id, user_id)
VALUES
($1, $2, $3)
RETURNING *