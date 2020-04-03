
exports.up = function(knex) {     //Responsável pela criação da tabela; up() = create()
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      });
  };
  
  exports.down = function(knex) {   //Deu problema e quero desfazer; dowm() = delete()
    return knex.schema.dropTable('ongs');
  };
  