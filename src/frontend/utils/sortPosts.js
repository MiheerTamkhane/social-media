export function sortPosts(posts) {
  return [...posts].sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  );
}
