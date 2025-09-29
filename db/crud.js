// db/crud.js
// CRUD (Create, Read, Update, Delete) operations for the users table

const db = require('./connection');

// Insert a new user
function createUser(name, email) {
  db.run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    [name, email],
    function (err) {
      if (err) return console.error('❌ Insert error:', err.message);
      console.log(`✅ User created with ID: ${this.lastID}`);
    },
  );
}

// Get one user by ID
function getUser(id) {
  db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
    if (err) return console.error('❌ Query error:', err.message);
    console.log('ℹ️ User:', row);
  });
}

// Get all users
function getAllUsers() {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) return console.error('❌ Query error:', err.message);
    console.log('👥 All Users:', rows);
  });
}

// Update a user
function updateUser(id, name, email) {
  db.run(
    `UPDATE users SET name = ?, email = ? WHERE id = ?`,
    [name, email, id],
    function (err) {
      if (err) return console.error('❌ Update error:', err.message);
      console.log(`✅ Updated ${this.changes} user(s)`);
    },
  );
}

// Delete a user
function deleteUser(id) {
  db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
    if (err) return console.error('❌ Delete error:', err.message);
    console.log(`✅ Deleted ${this.changes} user(s)`);
  });
}

// Export functions
module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
