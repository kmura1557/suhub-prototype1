//const { parseBody } = require("hono/utils/body");

//const temp = require("./templates/event-temp");

const months = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const days = ["日","月","火","水","木","金","土"];

const calendar = document.getElementById("calendar-body");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let monthAndYear = document.getElementById("monthAndYear");

//1月->0,2月->1,...,12月->11

showCalendar(currentMonth,currentYear);

//次の月へ進む
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;

    showCalendar(currentMonth,currentYear);
}
//前の月へ戻る
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;

    showCalendar(currentMonth,currentYear);
}

function showCalendar(month,year){
    let firstDay = (new Date(year,month)).getDay();

    const week = `
                    <div class="child day-of-week sunday">
                        <p>日</p>
                    </div>
                    <div class="child day-of-week">
                        <p>月</p>
                    </div>
                    <div class="child day-of-week">
                        <p>火</p>
                    </div>
                    <div class="child day-of-week">
                        <p>水</p>
                    </div>
                    <div class="child day-of-week">
                        <p>木</p>
                    </div>
                    <div class="child day-of-week">
                        <p>金</p>
                    </div>
                    <div class="child day-of-week saturday">
                        <p>土</p>
                    </div>
    `;

    //一度初期化
    calendar.innerHTML = week;

    monthAndYear.innerHTML = year + " " + months[month];

    let frag = document.createDocumentFragment();

    let date = 1;
    for(let i = 0;i < 6;i++){
        /*
        let day = document.createElement("div");

        day.className = "child";
        */
        for(let j = 0;j < 7;j++){
            let day = document.createElement("div");

            day.className = "child weekday";

            if(j === 0){
                day.className = "day-of-saturday child weekday";
            }
            else if(j === 6){
                day.className = "day-of-sunday child weekday";
            }

            if(i === 0 && j < firstDay){
                let p = document.createElement("p");
                day.className = "nodate";
                day.append(p);
                frag.append(day);
            }
            else if(date > daysInMonth(month,year)){
                break;
            }
            else{

                let p = document.createElement("p");
                day.setAttribute("data_date",date);
                day.setAttribute("data_month",month+1);
                day.setAttribute("data_year",year);
                day.setAttribute("data_month_name",months[month]);
//                day.setAttribute("onclick","goToNewPage()");


                let form = document.createElement("form");
                form.setAttribute("action","/");
                form.setAttribute("method","post");
                let data_year = document.createElement("input");
                data_year.setAttribute("name","year");
                data_year.setAttribute("value",year);
                let data_month = document.createElement("input");
                data_month.setAttribute("name","month");
                data_month.setAttribute("value",month+1);
                let data_date = document.createElement("input");
                data_date.setAttribute("name","date");
                data_date.setAttribute("value",date);
                let data_day = document.createElement("input");
                data_day.setAttribute("name","day");
                data_day.setAttribute("value",year*10000+(month+1)*100+date);

                let btn = document.createElement("button");
                btn.setAttribute("type","submit");
                btn.className = "event-btn";
                btn.innerHTML = "イベント情報を見る";

                form.append(data_year);
                form.append(data_month);
                form.append(data_date);
                form.append(data_day);
                form.append(btn);

                data_year.setAttribute("style","display: none");
                data_month.setAttribute("style","display: none");
                data_date.setAttribute("style","display: none");
                data_day.setAttribute("style","display: none");

                day.innerHTML = "<span>" + date + "</span>";
                console.log(date);

                if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                    p.className = "date-picker";
                    day.className = "selected child weekday";
                }

                day.setAttribute('id','event-day');
    
                day.append(p);
                day.append(form);
                frag.append(day);
                date++;
            }
        }
    }
    calendar.append(frag);
}

function daysInMonth(iMonth,iYear){
    return 32 - new Date(iYear,iMonth,32).getDate();
}

