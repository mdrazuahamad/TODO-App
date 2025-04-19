// src/generateUsers.js

const groups = ["Admin", "Editor", "Viewer"];

function generateUsers(count = 10) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    group: groups[i % groups.length],
  }));
}

export default generateUsers;
