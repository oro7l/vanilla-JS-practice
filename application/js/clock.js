const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock(); //초반의 1초 로딩을 없애기 위한 함수 호출
setInterval(getClock, 1000); //function, interval_time
//setTimeout(getClock,5000); //function, waiting_time

