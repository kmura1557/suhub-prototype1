const HTML = () => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link rel="stylesheet" href="./static/style-event.css">
        <link rel="stylesheet" href="./static/style-main.css">
    </head>
    <body>
        <header id="header">
            <h1><a href="./HTML/index.html">SUHub</a></h1>
            <nav>
                <ul class="header-nav">
                    <li><a href="#">event</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2>イベント一覧</h2>
            <section class="event">
                <div class="year-month">
                    <button id="previous-m" class="change-month" onclick="previous()" type="submit">前月</button>
                    <h3 id="monthAndYear">2023年07月</h3>
                    <button id="next-m" class="change-month" onclick="next()">翌月</button>
                </div>
            
                <div id="calendar-body">
                    
                </div>
            </section>
        </main>
        <script src="./static/calendar.js"></script>
        <script src="./static/index.js"></script>
    </body>
</html>
`;

const EVENT_VIEW = (event_day,event_list) => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link rel="stylesheet" href="../static/style-event.css">
        <link rel="stylesheet" href="../static/style-main.css">
    </head>
    <body>
        <header id="header">
            <h1><a href="./HTML/index.html">SUHub</a></h1>
            <nav>
                <ul class="header-nav">
                    <li><a href="#">event</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2 id="event-date">${event_day}のイベント情報</h2>
            <ul>
            ${event_list}
            </ul>
        </main>

        <script src="./static/index.js"></script>
    </body>
</html>
`;

const EVENT_VIEW_NONE = (event_list) => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link rel="stylesheet" href="../static/style-event.css">
        <link rel="stylesheet" href="../static/style-main.css">
    </head>
    <body>
        <header id="header">
            <h1><a href="./HTML/index.html">SUHub</a></h1>
            <nav>
                <ul class="header-nav">
                    <li><a href="#">event</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2 id="event-date">この日のイベント情報</h2>
            <p class="no-event">${event_list}</p>
        </main>

        <script src="./static/index.js"></script>
    </body>
</html>
`;


const TWEET_LIST_VIEW = (tweets) => `
<h1 class="title">ツイート一覧</h1>
<div class="tweet-list">
    ${tweets
      .map((tweet) => `<div class="tweet">${tweet.content}</div>`)
      .join("\n")}
</div>
`;

const USER_REGISTER_FORM_VIEW = () => `

<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link rel="stylesheet" href="./static/style-event.css">
        <link rel="stylesheet" href="./static/style-main.css">
    </head>
    <body>
        <header id="header">
            <h1><a href="./HTML/index.html">SUHub</a></h1>
            <nav>
                <ul class="header-nav">
                    <li><a href="#">event</a></li>
                </ul>
            </nav>
        </header>
        <main>
        <h1 class="title">ユーザー登録</h1>
        <form action="/user/register" method="POST">
            <label for="name">名前</label>
            <input type="text" name="name" id="name" style="background-color: rgb(150, 212, 247);"/>
            <label for="email">メールアドレス</label>
            <input type="email" name="email" id="email" style="background-color: rgb(150, 212, 247);"/>
            <button type="submit" style="background-color: rgb(150, 212, 227); padding: 0.5rem"; border-radius: 20%>登録</button>
        </form>
        </main>
        <script src="./static/calendar.js"></script>
        <script src="./static/index.js"></script>
    </body>
</html>
`;

const USER_TWEET_LIST_VIEW = (user, tweets) => `
<h1 class="title">${user.name}さんのツイート一覧</h1>
<div class="tweet-list">
    ${tweets
      .map((tweet) => `<div class="tweet">${tweet.content}</div>`)
      .join("\n")}
</div>
`;

const TWEET_FORM_VIEW = (users) => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link rel="stylesheet" href="./static/style-event.css">
        <link rel="stylesheet" href="./static/style-main.css">
    </head>
    <body>
        <header id="header">
            <h1><a href="./HTML/index.html">SUHub</a></h1>
            <nav>
                <ul class="header-nav">
                    <li><a href="#">event</a></li>
                </ul>
            </nav>
        </header>
        <main>
        <h1 class="title">ツイート</h1>
<form action="/tweet" method="POST">
    <label for="content">内容</label>
    <textarea name="content" id="content" rows="10"></textarea>
    <label for="user_id">ユーザー</label>
    <select name="user_id" id="user_id">
        ${users
          .map((user) => `<option value="${user.id}">${user.name}</option>`)
          .join("\n")}
    </select>
    <button type="submit">投稿</button>
</form>
        </main>
        <script src="./static/calendar.js"></script>
        <script src="./static/index.js"></script>
    </body>
</html>
`;

module.exports = {
    HTML,
    EVENT_VIEW,
    EVENT_VIEW_NONE,
    TWEET_LIST_VIEW,
    USER_REGISTER_FORM_VIEW,
    USER_TWEET_LIST_VIEW,
    TWEET_FORM_VIEW,
};