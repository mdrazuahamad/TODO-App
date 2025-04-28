import React, { useState, useEffect } from "react";

const ReactHooks = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);
  const [userCache, setUserCache] = useState({});
  const maxUserId = 10;

  // 1️⃣ Fetch current user if not cached
  useEffect(() => {
    if (!userCache[userId]) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserCache((prevCache) => ({
            ...prevCache,
            [userId]: data,
          }));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [userId]);

  // 2️⃣ Set user from cache immediately
  useEffect(() => {
    if (userCache[userId]) {
      setUser(userCache[userId]);
    }
  }, [userId, userCache]);

  // 3️⃣ 🔥 Prefetch the next user (background load)
  useEffect(() => {
    const nextId = userId + 1;
    if (nextId <= maxUserId && !userCache[nextId]) {
      fetch(`https://jsonplaceholder.typicode.com/users/${nextId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserCache((prevCache) => ({
            ...prevCache,
            [nextId]: data,
          }));
        })
        .catch((error) => console.error("Error prefetching next user:", error));
    }
  }, [userId, userCache]);

  const handleNext = () => {
    if (userId < maxUserId) {
      setUserId((prevId) => prevId + 1);
    }
  };

  const handlePrev = () => {
    if (userId > 1) {
      setUserId((prevId) => prevId - 1);
    }
  };

  return {
    user,
    userId,
    maxUserId,
    handleNext,
    handlePrev,
  };
};

export default ReactHooks;
