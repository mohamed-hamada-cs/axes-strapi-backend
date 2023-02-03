const parse = require("pg-connection-string").parse;

const path = require("path");

module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    const config = parse(process.env.DATABASE_URL);
  }

  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
