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

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    if (textDay <= 0) {
        document.querySelector('.day-container').classList.add('hide');
    }
    
};

setInterval(CountDown, 1000);