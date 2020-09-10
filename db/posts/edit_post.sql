UPDATE artPosts SET
title = $2,
description = $3
WHERE post_id = $1;