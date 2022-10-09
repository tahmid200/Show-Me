/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.addColumns('show_me_users', {
        email: { type: 'varchar(1000)', notNull: true },
        password: {type: 'varchar(1000)', notNull: true}
      })
};

exports.down = pgm => {};
