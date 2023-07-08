const sqlite3 = require("sqlite3").verbose();
const queries = require("./queries/event-query");
const templates = require("./templates/event-temp");
const { serve } = require("@hono/node-server");
const { serveStatic } = require("@hono/node-server/serve-static");
const { Hono } = require("hono");


const db = new sqlite3.Database("database.db");

db.serialize(() => {
    db.run(queries.Events.createTable);
    db.run(queries.Users.createTable);

    db.run(queries.Users.create, 'りんご太郎', 'apple@example.com', '2022-08-15 00:00:00');
    db.run(queries.Users.create, 'みかん次郎', 'mikan@example.com', '2022-08-15 00:00:01');
    db.run(queries.Users.create, 'ぶどう三郎', 'budo@example.com', '2022-08-15 00:00:02');

    db.run(queries.Events.create, 'あけおめ！', 3, '2023-01-01 00:00:00');
    db.run(queries.Events.create, '今年もよろしくお願いします！', 2, '2023-01-01 00:00:01');
    db.run(queries.Events.create, '今年こそは痩せるぞ！', 1, '2023-01-01 00:00:02');
});

const app = new Hono();

app.get("/", async (c) => {
/*
    const tweets = await new Promise((resolve) => {
      db.all(queries.Tweets.findAll, (err, rows) => {
          resolve(rows);
      });
  });

  const tweetList = templates.TWEET_LIST_VIEW(tweets);
*/
  const response = templates.HTML();

  return c.html(response);

});

app.get("/event_day", async (c) => {
    const events = await new Promise((resolve) => {
        db.all(queries.Events.findAll,(err,rows) => {
            resolve(rows);
        });
    });

    const response = templates.EVENT_VIEW("a",events);

    return c.html(response);
})
/*
app.get("/user/register", async (c) => {
    const registerForm = templates.USER_REGISTER_FORM_VIEW();

    const response = templates.HTML(registerForm);

    return c.html(response);
});

app.post("/user/register", async (c) => {
    const body = await c.req.parseBody();
    const now = new Date().toISOString();

    const userID = await new Promise((resolve) => {
        db.run(queries.Users.create, body.name, body.email, now, (err) => {
            resolve(this.lastID);
        });
    });

    return c.redirect(`/user/${userID}`);
});

app.get("/user/:id", async (c) => {
    const userId = c.req.param("id");

    const user = await new Promise((resolve) => {
        db.get(queries.Users.findById, userId, (err, row) => {
            resolve(row);
        });
    });

    if (!user) {
        return c.notFound();
    }

    const tweets = await new Promise((resolve) => {
        db.all(queries.Tweets.findByUserId, userId, (err, rows) => {
            resolve(rows);
        });
    });

    const userTweetList = templates.USER_TWEET_LIST_VIEW(user, tweets);

    const response = templates.HTML(userTweetList);

    return c.html(response);
});

app.get("/tweet", async (c) => {
    const users = await new Promise((resolve) => {
        db.all(queries.Users.findAll, (err, rows) => {
            resolve(rows);
        });
    });

    const tweetForm = templates.TWEET_FORM_VIEW(users);

    const response = templates.HTML(tweetForm);

    return c.html(response);
});

app.post("/tweet", async (c) => {
    const body = await c.req.parseBody();
    const now = new Date().toISOString();

    await new Promise((resolve) => {
        db.run(queries.Tweets.create, body.content, body.user_id, now, (err) => {
            resolve();
        });
    });

    return c.redirect("/");
});


*/

app.use("/static/*", serveStatic({ root: "./" }));

serve(app);

process.stdin.on("data", (data) => {
  if (data.toString().trim() === "q") {
    db.close();
    process.exit();
  }
});




/*
const sqlite3 = require('sqlite3').verbose();
const queries = require('./queries/event-query');
const db = new sqlite3.Database('database.db');
db.serialize(() => {
    db.run(queries.Days.createTable);
    db.run(queries.Events.createTable);
    db.run(queries.Users.createTable);
    db.run(queries.Users.create, '埼大バレー部','saidaivolleyball@example.com','2023-0401 00:00:00');
    db.run(queries.Users.create, '埼大FP','saidaifp@example.com','2023-0401 00:00:01');
    db.run(queries.Users.create, '埼大陸上部','saidaiTandF@example.com','2023-0401 00:00:02');
    db.run(queries.Days.create,202363,2023,6,3,1);
    db.run(queries.Days.create,2023725,2023,7,25,2);
    db.run(queries.Days.create,20231018,2023,10,18,3);
    db.run(queries.Events.create,'埼大コンテスト','是非お越しください',2023725,2,'2023-07-01 00:00:00');
    db.run(queries.Events.create,'サークル対抗リレー対決','盛り上がろう！',20231018,3,'2023-07-01 00:00:01');
    db.run(queries.Events.create,'バレー大会','誰でも参加できます！',202363,1,'2023-07-01 00:00:02');
});
db.close();
*/