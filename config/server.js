module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },

  // ...
  admin: {
    // ...
    url: "/",
    // Customize the Strapi admin logo
    logo: {
      path: "/assets/images/logo.png",
      alt: "My Strapi Site",
    },
  },
  // ...
});
