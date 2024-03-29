const sqlite3 = require("sqlite3").verbose();
const queries = require("./queries/event-query");
const templates = require("./templates/index-temp");
const { serve } = require("@hono/node-server");
const { serveStatic } = require("@hono/node-server/serve-static");
const { Hono } = require("hono");


const db = new sqlite3.Database("database.db");


db.serialize(() => {
    db.run(queries.Dates.createTable);
    db.run(queries.Events.createTable);
    db.run(queries.Users.createTable);


    db.run(queries.Users.create, 'りんご太郎', 'apple@example.com', '2022-08-15 00:00:00');
    db.run(queries.Users.create, 'みかん次郎', 'mikan@example.com', '2022-08-15 00:00:01');
    db.run(queries.Users.create, 'ぶどう三郎', 'budo@example.com', '2022-08-15 00:00:02');

    db.run(queries.Events.create, '埼大バレー大会', "盛り上がろう！", 3, '2023-01-01 00:00:00', 20230710);
    db.run(queries.Events.create, '埼大コンテスト', "ぜひお越しください", 2, '2023-01-01 00:00:01', 20230710);
    db.run(queries.Events.create, 'サークル対抗リレー対決', "エントリー待ってます！", 1, '2023-01-01 00:00:02', 20231011);


//    db.run(queries.Dates.create, 2023,7,10,20230710,2);
//    db.run(queries.Events.create, 'テニス大会', 4, )
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


/*
app.get("/event_day", async (c) => {
    const events = await new Promise((resolve) => {
        db.all(queries.Events.findAll,(err,rows) => {
            resolve(rows);
        });
    });

    const response = templates.EVENT_VIEW(events);

    return c.html(response);
});
*/

let pointDay;

app.post("/",async (c) => {
    const body = await c.req.parseBody();

    const Dates = await new Promise((resolve) => {
        db.run(queries.Dates.create, body.year,body.month,body.date,body.day,2);

        db.get(queries.Dates.findDay,body.day,(err,rows) => {
            resolve(rows);
        });
    });
    pointDay = Dates.day;

    return c.redirect(`/event_day/${pointDay}`);
});


app.get("/event_day/:date",async (c) => {
    const EventDay = c.req.param("date");

//    console.log(EventDay);
    const events = await new Promise((resolve) => {
        db.all(queries.Events.findByDate,EventDay,(err,row) => {
            resolve(row);
        });
    });
    const Dates = await new Promise((resolve) => {
        db.get(queries.Dates.findDay,EventDay,(err,rows) => {
            resolve(rows);
        });
    });

    const ymd = `${Dates.year + "年" + Dates.month + "月" + Dates.date + "日"}`;


    if(Object.keys(events).length === 0){
        const response = templates.EVENT_VIEW_NONE(ymd,"この日イベントの予定はありません");

        return c.html(response);
    }
    else{  
/*
        const EventsList = await new Promise((resolve) => {
            db.all(queries.Events.findByDate,(err,row) => {
                resolve(row);
            });
        });
*/

//      console.log(events);
//      console.log(Dates);

        let result = '';

        for (let elem of events) {
            result += `<li class="event-list">イベント名：${elem.name}　　　`;
            result += `一言：${elem.content}</li>`;
        }

        const responses = templates.EVENT_VIEW(ymd,result);

        return c.html(responses);
    }
});



app.get("/user/register", async (c) => {
    const registerForm = templates.USER_REGISTER_FORM_VIEW();

    return c.html(registerForm);
});


app.post("/user/register", async (c) => {
    const body = await c.req.parseBody();
    const now = new Date().toISOString();

    const userID = await new Promise((resolve) => {
        db.run(queries.Users.create, body.name, body.email, now, (err) => {
            resolve(this.lastID);
        });
    });

    return c.redirect(`/`);
});



/*
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
*/


app.get("/event/register", async (c) => {
    const users = await new Promise((resolve) => {
        db.all(queries.Users.findAll, (err, rows) => {
            resolve(rows);
        });
    });

    const response = templates.EVENT_FORM_VIEW(users);

    return c.html(response);
});
/*
app.post("/event/register", async (c) => {
    const body = await c.req.parseBody();
    const now = new Date().toISOString();

    console.log(body);
    const date = body.year*10000+body.month*100+body.day;
    console.log(body);

    db.run(queries.Dates.create, body.year,body.month,body.day,date,2);

    await new Promise((resolve) => {
        db.run(queries.Events.create, body.name, body.content, body.user_id, now, date, (err) => {
            resolve();
        });
    });

    return c.redirect(`/`);
});
*/
app.post("/event/register", async (c) => {
  try {
    const body = await c.req.parseBody();
    const now = new Date().toISOString();
    
    const date = parseInt(body.year) * 10000 + parseInt(body.month) * 100 + parseInt(body.day);

/*
    await new Promise((resolve, reject) => {
      db.run(queries.Dates.create, body.year, body.month, body.day, date, 2, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
*/
    await new Promise((resolve, reject) => {
      db.run(queries.Events.create, body.name, body.content, body.user_id, now, date, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });

    return c.redirect(`/`);
  } catch (error) {
    console.error(error);
    // エラーハンドリングを行う必要があります
  }
});


app.use("/static/*", serveStatic({ root: "./" }));

serve(app);

process.stdin.on("data", (data) => {
  if (data.toString().trim() === "q") {
    db.close();
    process.exit();
  }
});


