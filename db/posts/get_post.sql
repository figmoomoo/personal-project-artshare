SELECT post_id, title, description, image, post_points, a.user_id, u.username
FROM artPosts a
JOIN artUsers u ON u.user_id = a.user_id
WHERE post_id = $1;