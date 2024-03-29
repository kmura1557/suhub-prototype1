const Events = {
    createTable: `
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            content TEXT NOT NULL,
            user_id INTEGER NOT NULL,
            created_at DATETIME NOT NULL,
            date INTEGER NOT NULL
        );
    `,
    create: `INSERT INTO events (name,content, user_id, created_at, date) VALUES (?, ?, ?, ?, ?);`,
    findAll: `SELECT * FROM events;`,
    findByUserId: `SELECT * FROM events WHERE user_id = ?;`,
    findByDate: `SELECT * FROM events WHERE date = ?;`,
    findDate: `SELECT date FROM events WHERE date = ?;`,
};
const Users = {
    createTable: `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            created_at DATETIME NOT NULL
        );
    `,
    create: `INSERT INTO users (name, email, created_at) VALUES (?, ?, ?);`,
    findAll: `SELECT * FROM users;`,
    findById: `SELECT * FROM users WHERE id = ?;`,
};

const Dates = {
    createTable: `
        CREATE TABLE IF NOT EXISTS dates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL,
            month INTEGER NOT NULL,
            date INTEGER NOT NULL,
            day INTEGER NOT NULL,
            user_id INTEGER NOT NULL
        );
    `,
    create: `INSERT INTO dates (year, month, date, day, user_id) VALUES (?, ?, ?, ?, ?);`,
    createDay: `INSERT INTO dates (day) VALUES (?);`,
    findAll: `SELECT * FROM dates;`,
    findDay: `SELECT * FROM dates WHERE day = ?;`,
};

module.exports = {
    Events,
    Users,
    Dates,
};


