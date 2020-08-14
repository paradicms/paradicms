const objects = [...Array(100)]
  .map((_, i) => ({
    subject: "Test subject " + i,
    title: "Test object " + i,
    uri: "http://example.com/object" + i,
  }))
  .sort((left, right) => left.uri.localeCompare(right.uri));

export const TestData = {
  collection: {
    name: "Test collection",
    uri: "http://example.com/collection",
  },
  institution: {
    name: "Test institution",
    uri: "http://example.com/institution",
  },
  object: objects[0],
  objects,
};
