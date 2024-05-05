const countdown = () => {
    const endDate = new Date(`June 17 2024 08:30:00`).getTime();
    const now = new Date().getTime();
    const gap = endDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(`.day`).innerHTML = textDay;
    document.querySelector(`.hours`).innerHTML = textHour;
    document.querySelector(`.minute`).innerHTML = textMinute;
    document.querySelector(`.second`).innerHTML = textSecond;

    if(gap < 0) return;
};
setInterval(countdown, 1000);