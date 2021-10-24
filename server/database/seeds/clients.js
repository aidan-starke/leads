exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        { id: 1, first_name: 'testy', last_name: 'boi', email: 'test@gmail.com', phone: '021232123', created_at: '' }
      ])
    })
}