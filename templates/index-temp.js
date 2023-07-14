const HTML = () => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
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

        <footer>
            <a href="./event/register">団体専用ページ</a>
        </footer>

        <script src="./static/calendar.js"></script>
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
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
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

        <footer>
            <a href="../event/register">団体専用ページ</a>
        </footer>

    </body>
</html>
`;

const EVENT_VIEW_NONE = (date,event_list) => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="uft-8">
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
            <h2 id="event-date">${date}のイベント情報</h2>
            <p class="no-event">${event_list}</p>
        </main>

        <footer>
            <a href="../event/register">団体専用ページ</a>
        </footer>

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
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
        <h1 class="title">ユーザー登録</h1>
        <form action="/user/register" method="POST">
            <label for="name">名前</label>
            <input type="text" name="name" id="name" style="background-color: rgb(150, 212, 247);"/>
            <label for="email">メールアドレス</label>
            <input type="email" name="email" id="email" style="background-color: rgb(150, 212, 247);"/>
            <button type="submit" style="background-color: rgb(150, 212, 227); padding: 0.5rem"; border-radius: 20%>登録</button>
        </form>
        </main>

        <footer>
            <a href="./register">団体専用ページ</a>
        </footer>

        <script src="./static/calendar.js"></script>
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

const EVENT_FORM_VIEW = (users) => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset='uft-8'>
        <title>ただの練習用サイトです</title>
        <meta name="description" content="JSとSQLをうまく繋げられるか実験(SSR?)">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
            <h1 class="title">イベント登録</h1>
            <form action="/event/register" method="POST">
                <label for="user_id">ユーザー</label>
                <select name="user_id" id="user_id">
                    ${users
                        .map((user) => `<option value="${user.id}">${user.name}</option>`)
                        .join("\n")}
                </select>
                <label for="name">イベント名</label>
                <input type="text" name="name" id="name"/>
                <label for="content">内容</label>
                <textarea name="content" id="content" rows="10"></textarea>
                <label for="year">年:</label>
                <select id="year" name="year"></select>

                <label for="month">月:</label>
                <select id="month" name="month"></select>

                <label for="day">日:</label>
                <select id="day" name="day"></select>

                <button type="submit">登録</button>
            </form>
        </main>

        <footer>
            <a href="./register">団体専用ページ</a>
        </footer>

        <script>

        // 年の選択肢を作成
        const yearSelect = document.getElementById('year');
        const currentYear = new Date().getFullYear();
        const startYear = currentYear; // 100年後まで選択可能にする
        for (let year = startYear; year <= currentYear+100; year++) {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = year;
          yearSelect.appendChild(option);
        }

        // 月の選択肢を作成
        const monthSelect = document.getElementById('month');
        for (let month = 1; month <= 12; month++) {
          const option = document.createElement('option');
          option.value = month;
          option.textContent = month;
          monthSelect.appendChild(option);
        }

        // 日の選択肢を作成
        const daySelect = document.getElementById('day');

        function updateDays() {
          daySelect.innerHTML = ''; // 選択肢をリセット

          const year = parseInt(yearSelect.value);
          const month = parseInt(monthSelect.value);
          const daysInMonth = new Date(year, month, 0).getDate();

          for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
          }
        }

        yearSelect.addEventListener('change', updateDays);
        monthSelect.addEventListener('change', updateDays);

        // 初回表示時に日の選択肢を更新する
        updateDays();

        </script>
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
    EVENT_FORM_VIEW,
};