module.exports = {
  apps: [
    {
      name: "CONTROLLY",
      script: "./bin/www.ts",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
