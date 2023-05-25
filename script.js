const lesson=new Date(2023,4,26,09,30);
console.log(lesson);

let today = new Date();
let now = today.toLocaleString();
console.log(now);

let Countdown=countDown(today,lesson)
console.log(Countdown);

function countDown(date1,date2){
    let End=date1-date2
    return End;
}