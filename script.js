const lesson=new Date(2023,4,26,09,30);
//console.log(lesson);


let conto=setInterval(countDown,1000,lesson);



function countDown(lesson){
    let today = new Date();
    let now = Date.now()


    let End=lesson-now;
    if (End==0){
        clearInterval(conto);
    }

    console.log(now)
    console.log(End);
    return End;
}