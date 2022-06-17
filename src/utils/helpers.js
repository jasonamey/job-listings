export const hasTag = (data, tagsFilter) => {
  function flattenTags(items) {
    const flat = [];
    items.forEach((item) => {
      if (Array.isArray(item)) {
        flat.push(...flattenTags(item));
      } else {
        flat.push(item);
      }
    });
    return flat;
  }
  const jobTags = flattenTags([data.languages, data.role, data.level]);

  return tagsFilter.every((tag) => jobTags.includes(tag));
};
