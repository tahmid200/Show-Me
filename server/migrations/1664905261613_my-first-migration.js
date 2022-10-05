/* eslint-disable camelcase */
/*
exports.shorthands = undefined;

exports.up = pgm => {};

exports.down = pgm => {};
*/
exports.up = (pgm) => {
    pgm.createTable('show_me_users', {
      id: 'id',
      name: { type: 'varchar(1000)', notNull: true },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
    pgm.createTable('posts', {
      id: 'id',
      userId: {
        type: 'integer',
        notNull: true,
        references: '"show_me_users"',
        onDelete: 'cascade',
      },
      body: { type: 'text', notNull: true },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
    pgm.createIndex('posts', 'userId')
  }