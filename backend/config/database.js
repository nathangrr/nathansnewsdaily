module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: "sqlite"
        //"client": "postgres",
        //"host": "${process.env.DATABASE_HOST}",
        //"port": "${process.env.DATABASE_PORT}",
        //"database": "${process.env.DATABASE_NAME}",
        //"username": "${process.env.DATABASE_USERNAME}",
        //"password": "${process.env.DATABASE_PASSWORD}",
        //"ssl": { "rejectUnauthorized": false }
      },
      options: {
        useNullAsDefault: true,
      },
      scripts: {
        "start": "node index.js"
      },
    },
  },
});


// postgres://jhaxxwfhdnorng:b2cf13f495e97db76be7ea4d7288f1510c796ffe450b7de3dbbd7eca9fc77fee@ec2-3-217-87-84.compute-1.amazonaws.com:5432/d1t059akm8ls6c