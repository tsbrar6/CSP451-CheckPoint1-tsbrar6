# CSP451 CheckPoint1 – tsbrar6

A tiny static website used to demonstrate Git & GitHub workflow for CSP451 (Week 1).

## Installation
No build tools required.
```bash
git clone https://github.com/tsbrar6/CSP451-CheckPoint1-tsbrar6.git
cd CSP451-CheckPoint1-tsbrar6
## User Authentication (demo)
- Open `login.html` in your browser.
- Validates required fields and password length.
- **Demo only:** no backend/database connection.

## Database Setup

This project includes a simple SQLite database for demonstration purposes.

### Steps to Run
1. Ensure you have Node.js installed.
2. Install SQLite dependency:
   ```bash
   npm install sqlite3

3. The database file `app.db` will be created automatically in the `/db` folder.
4. A `users` table is initialized with fields:
   - `id` (Primary Key, Auto Increment)
   - `name` (Text, Required)
   - `email` (Unique, Required)

### CRUD Functions
- `createUser(name, email)` → insert a new user
- `getUser(id)` → fetch one user by ID
- `getAllUsers()` → fetch all users
- `updateUser(id, name, email)` → update existing user
- `deleteUser(id)` → remove user by ID
