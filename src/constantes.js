export const BackendURLs = {
  GetUsersActivity: {
    LIVE: (userId) => `http://localhost:3001/user/${userId}/activity`,
    MOCK: (userId) => `/mock_data/user/${userId}/activity.json`,
  },
  GetUsersPerformance: {
    LIVE: (userId) => `http://localhost:3001/user/${userId}/performance`,
    MOCK: (userId) => `/mock_data/user/${userId}/performance.json`,
  },
  GetUsersAverageSession: {
    LIVE: (userId) => `http://localhost:3001/user/${userId}/average-sessions`,
    MOCK: (userId) => `/mock_data/user/${userId}/average-sessions.json`,
  },
  GetUsersData: () => `/mock_data/users/data.json`,
};
