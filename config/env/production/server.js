module.exports = ({ env }) => {
  return {
    url: env("RENDER_EXTERNAL_URL", ""),
  };
};
