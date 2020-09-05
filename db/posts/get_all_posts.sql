SELECT post_id, title, description, image, post_points, a.user_id, u.username
FROM artPosts a
JOIN artUsers u ON u.user_id = a.user_id
ORDER BY post_id DESC;