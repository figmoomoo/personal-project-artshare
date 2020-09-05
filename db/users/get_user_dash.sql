SELECT username, 
user_points, 
art_count, 
profile_description, 
profile_picture
FROM artUsers
WHERE user_id = $1;