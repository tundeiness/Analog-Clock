const getDate = () => {
    const dateTime = new Date();

    const seconds = dateTime.getSeconds();
    const secondsDeg = ((seconds/60) * 360) + 90;
    const second_hand = document.querySelector('.second_hand');
    second_hand.style.transform = `rotate(${secondsDeg}deg)`;



    const mins = dateTime.getMinutes();
    const minsDeg = ((mins/60) * 360) + 90;
    const min_hand = document.querySelector('.min_hand');
    min_hand.style.transform = `rotate(${minsDeg}deg)`;



    const hrs = dateTime.getHours();
    const hrsDeg = ((hrs/12) * 360) + 90;
    const hour_hand = document.querySelector('.hour_hand');
    hour_hand.style.transform = `rotate(${hrsDeg}deg)`;


    // console.log(minsDeg)
}

setInterval(getDate, 1000);