SELECT 
comment_id, 
comment, 
comment_points, 
a.post_id,
u.post_id
FROM artPostComments 
JOIN artPosts u ON u.post_id = a.post_id
WHERE comment_id = $1;