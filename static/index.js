//eventのカレンダーの各日にちをクリックするとその日のイベントを表示するページに移動
let year = "";
let month = "";
let date = "";

function goToNewPage(){
    year = this.year;
    month = this.month;
    date = this.date;
    window.location.href = "http://localhost:3000/event_day";
};

console.log(year);
console.log(month);
console.log(date);
