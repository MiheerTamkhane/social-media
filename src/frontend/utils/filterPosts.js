function filterPostsByDate(posts, sortBy) {
  if (sortBy === "NEW_TO_OLD") {
    return [...posts].sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  } else if (sortBy === "OLD_TO_NEW") {
    return [...posts].sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
  }
  return [...posts].sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  );
}

function filterPostsByTrending(posts, sortBy) {
  if (sortBy === "TRENDING") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
  return posts;
}

export { filterPostsByDate, filterPostsByTrending };
