
module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};


// module.exports = ({ env }) => {
//   return {
//       defaultConnection: 'default',
//       connections: {
//         default: {
//           settings: {
//             host: env('DATABASE_HOST', 'localhost'),
//             port: env.int('DATABASE_PORT', 3306),
//             database: env('DATABASE_NAME', 'strapi'),
//             user: env('DATABASE_USERNAME', 'strapi'),
//             password: env('DATABASE_PASSWORD', 'strapi'),
//             ssl: { rejectUnauthorized: false },
//           }
//         }
//       },
//       debug: false
//     }
// };
