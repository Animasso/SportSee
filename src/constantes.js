export const BackendURLs = {
  GetUsersActivity: {
    LIVE: (userId) => `http://localhost:3000/user/${userId}/activity`,
    MOCK: (userId) => `/user/${userId}/activity.json`,
  },
  GetUsersPerformance: {
    LIVE: (userId) => `http://localhost:3000/user/${userId}/performance`,
    MOCK: (userId) => `/user/${userId}/performance.json`,
  },
  GetUsersAverageSession: {
    LIVE: (userId) => `http://localhost:3000/user/${userId}/average-sessions`,
    MOCK: (userId) => `/user/${userId}/average-sessions.json`,
  },
  GetUserData: {
    LIVE: (userId) => `http://localhost:3000/user/${userId}`,
    MOCK: (userId) => `/user/${userId}/data.json`,
  },
  GetUsersData: () => `user/user_data.json`,
};
