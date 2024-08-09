// module.exports = {
//   apps: [
//     {
//       name: "myapp",
//       script: "npm run preview",
//       port: 3000,
//     },
//   ],
// };
module.exports = {
  apps: [
    {
      name: "myapp",
      script: "npm",
      args: "run start",
      cwd: "/var/www/competition/",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
