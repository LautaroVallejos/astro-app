module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 5050),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f123d193ab8a2ca080c260a8b45d36f1'),
    },
  },
});
