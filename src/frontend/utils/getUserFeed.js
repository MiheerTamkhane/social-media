export function getUserFeed(posts, following, currentUser) {
  const followingUsername = following.map((user) => user.username);
  return posts.filter(
    (post) =>
      followingUsername.includes(post.username) || post.username === currentUser
  );
}
