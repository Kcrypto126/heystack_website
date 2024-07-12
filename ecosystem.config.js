module.exports = {
  apps: [
    {
      name: "HeyStack",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
