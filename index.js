const CountDown = () => {
    const countDate = new Date('June 26, 2022, 9:00').getTime();
    const currentTime = new Date().getTime();

    const gap = countDate - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    const days = document.querySelectorAll('.day'); 
    days.forEach(element => element.innerText = textDay);
    const hours = document.querySelectorAll('.hour'); 
    hours.forEach(element => element.innerText = textHour);
    const minutes = document.querySelectorAll('.minute'); 
    minutes.forEach(element => element.innerText = textMinute);
    const seconds = document.querySelectorAll('.second'); 
    seconds.forEach(element => element.innerText = textSecond);

    //document.querySelector('.day').innerText = textDay;
    //document.querySelector('.hour').innerText = textHour;
    //document.querySelector('.minute').innerText = textMinute;
    //document.querySelector('.second').innerText = textSecond;

    if (textDay <= 0) {

        const dayContainers = document.querySelectorAll('.day-container');
        dayContainers.forEach(element => element.classList.add('hide'));
    }
    
};

setInterval(CountDown, 1000);