
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('favorites', function(table) {
      table.string('lat');
      table.string('lng');
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('favorites', function(table) {
      table.dropColumn('lat');
      table.dropColumn('lng');
    })
  ]);
};
