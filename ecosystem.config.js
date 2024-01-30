module.exports = {
    apps: [
      {
        name: "axes-strapi-backend",
        script: "npm",
        args: "start",
        cwd: "/home/web_projects/back/axes-strapi-backend/",
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
