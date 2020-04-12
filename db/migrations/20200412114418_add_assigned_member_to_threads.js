
exports.up = async function (knex, Promise) {
    await knex.schema.table('threads', table => {
      table.string('assigned_member_id', 20).nullable().index();
      table.dateTime('assigned_expires_at').nullable();
    });
  };
  
  exports.down = async function (knex, Promise) {
    await knex.schema.table('threads', table => {
      table.dropColumn('assigned_member_id');
      table.dropColumn('assigned_expires_at');
    });
  };