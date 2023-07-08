const Events = {
    createTable: `
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            user_id INTEGER NOT NULL,
            created_at DATETIME NOT NULL
        );
    `,
    create: `INSERT INTO events (content, user_id, created_at) VALUES (?, ?, ?);`,
    findAll: `SELECT * FROM events;`,
    findByUserId: `SELECT * FROM events WHERE user_id = ?;`,
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
    findByTweetId: `SELECT * FROM users WHERE id = (SELECT user_id FROM events WHERE id = ?);`,
};

const Dates = {
    createTable: `
        CREATE TABLE IF NOT EXISTS dates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date INTEGER NOT NULL,
            year INTEGER NOT NULL,
            month INTEGER NOT NULL,
            day INTEGER NOT NULL,
            user_id INTEGER NOT NULL
        );
    `,
    create: `INSERT INTO dates (date, year, month, day, user_id) VALUES (?, ?, ?, ?, ?);`,
    findAll: `SELECT * FROM dates;`,
};
/*
const Dates = {
    createTable: `
        CREATE TABLE IF NOT EXISTS dates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date INTEGER NOT NULL,
            year INTEGER NOT NULL,
            month INTEGER NOT NULL,
            day INTEGER NOT NULL,
        );
    `,
    create: `INSERT INTO dates (date,year,month,day,user_id) VALUES (?, ?, ?, ?, ?);`,
    findAll: `SELECT * FROM dates;`,
};
*/


module.exports = {
    Events,
    Users,
    Dates,
};



/*
const Tweets = {
    createTable: `
        CREATE TABLE IF NOT EXISTS tweets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            user_id INTEGER NOT NULL,
            created_at DATETIME NOT NULL
        );
    `,
    create: `INSERT INTO tweets (content, user_id, created_at) VALUES (?, ?, ?);`,
    findAll: `SELECT * FROM tweets;`,
    findByUserId: `SELECT * FROM tweets WHERE user_id = ?;`,
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
    findByTweetId: `SELECT * FROM users WHERE id = (SELECT user_id FROM events WHERE id = ?);`,
  };


  module.exports = {
    Tweets,
    Users,
  };
*/


/*
const Days = {
    createTable: `
        CREATE TABLE IF NOT EXISTS days (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date INTEGER NOT NULL,
            year INTEGER NOT NULL,
            month INTEGER NOT NULL,
            day INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
        );
    `,
    create: `INSERT INTO days (date,year,month,day,user_id) VALUES (?, ?, ?, ?, ?);`,
    findAll: `SELECT * FROM days;`,
};
*/
/*
const Events = {
    createTable: `
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            content TEXT NOT NULL,
            event_day INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            created_at DATETIME NOT NULL,
        );
    `,
    create: `INSERT INTO Events (name,content,event_day,user_id, created_at) VALUES (?, ?, ?, ?, ?);`,
    findAll: `SELECT * FROM Events;`,
};

const Users = {
    createTable: `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            created_at DATETIME NOT NULL,
        );
    `,
    create: `INSERT INTO users (name, email, created_at) VALUES (?, ?, ?);`,
    findAll: `SELECT * FROM users;`,
    findByEventId: `SELECT * FROM users WHERE id = (SELECT user_id FROM events WHERE id = ?);`,
};

module.exports = {
    Tweets,
    Days,
    Events,
    Users,
}
*/