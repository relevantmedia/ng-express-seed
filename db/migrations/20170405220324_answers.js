
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(table){
    table.increments('id').notNullable();
    table.integer('profile_id');
    table.integer('question_id');
    table.json('value').notNullable();
    table.timestamps([useTimestamps], [defaultToNow]).notNullable();
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('answers');
};
