const lesson=new Date(2023,4,29,9,30);
//console.log(lesson);

let conto=setInterval(countDown,1000,lesson);

function countDown(lesson){
    let today = new Date();
    let now = Date.now()

    let End=lesson-now
   
     let seconds=Math.floor(End/1000);
     let minutes=Math.floor(seconds/60);
     let hours=Math.floor(minutes/60);
     let days=Math.floor(hours/24);
    
     seconds=seconds % 60;
     minutes=minutes % 60;
     hours=hours%24;
     days=days%24;
    
    console.log(seconds+' secondi');
    console.log(minutes+' minuti!');
    console.log(hours+' ore!');
    console.log(days+' giorni!')
    
     let Days=document.querySelector('.days');
     Days.innerHTML=days;

     let Ore=document.querySelector('.ore');
     Ore.innerHTML=hours;
    
     let Minutes=document.querySelector('.minuti');
     Minutes.innerHTML=minutes;
     
     let Seconds=document.querySelector('.secondi');
     Seconds.innerHTML=seconds;


    if (End<=1){
        clearInterval(conto);
    };
    
    return End;;
    
}

function creaElemento(elementi,classe){
    let myElement=document.createElement(elementi);
    myElement.classList.add(classe);

    return myElement;

}