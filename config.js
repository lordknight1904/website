const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/islab2',
  port: process.env.PORT || 5000,
  SERVER_ADMIN_PASSWORD_SECRET: 'njfabskljfgajkbskjd'
};

export default config;
