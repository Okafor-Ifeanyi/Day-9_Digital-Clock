const hour1 = document.getElementById('hour-1')
const hour2 = document.getElementById('hour-2')
const minute1 = document.getElementById('min-1')
const minute2 = document.getElementById('min-2')

function displayTime() {
    var time = new Date()
    var hrs = time.getHours();
    var min = time.getMinutes();
    var period = document.getElementById('period')

    if (hrs >= 12){
        period.innerHTML = "PM";
    }else{
        period.innerHTML = "AM";
    }
    if (hrs > 12){
        hrs = hrs -12
    }


    if(hrs < 10){
        hour2.innerHTML = parseInt(hrs)
    }
    else{
        n = parseInt(hrs)
        digits = (""+n).split("");
        hour1.innerHTML = digits[0]
        hour2.innerHTML = digits[1]   
    }


    if(min < 10){
        minute2.innerHTML =  parseInt(min)
    }
    else{
        n = min
        digits = (""+n).split("");
        minute1.innerHTML = digits[0]
        minute2.innerHTML = digits[1]   
    }
    // hrs = parseInt(hrs)
    // hour2.innerHTML = hrs
    // for (i = 0; i < hrs.length; i++) {
    //     hourDigit.innerHTML = hrs;
    //   }
    // minute1.innerHTML = min

}
setInterval(displayTime, 10)