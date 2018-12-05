// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "back_2_bingerr"
    },
    migration: {
      tableName: "migrations",
      director: "./db/migrations"
    }
  }
};
