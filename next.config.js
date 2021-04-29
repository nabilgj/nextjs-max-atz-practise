const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "nabil",
        mongodb_password: "12345",
        mongodb_clustername: "restapi",
        mongodb_database: "nextjs-AtoZProject-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "nabil",
      mongodb_password: "12345",
      mongodb_clustername: "restapi",
      mongodb_database: "nextjs-AtoZProject",
    },
  };
};
