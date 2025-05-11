require('dotenv').config();

const checkEnv = () => {
  if (!process.env.ADMIN_INVITE_TOKEN) {
    console.warn("⚠️  ADMIN_INVITE_TOKEN is not set in .env file");
  } else {
    console.log("🔑 ADMIN_INVITE_TOKEN:", process.env.ADMIN_INVITE_TOKEN);
  }
};

module.exports = checkEnv;