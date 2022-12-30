
document.addEventListener("DOMContentLoaded", function () {

    const endDate = new Date(2022, 11, 30,  new Date().getHours(), new Date().getMinutes(), new Date().getSeconds() + 10);
    /*const endDate = new Date(2023, 0, 1,  11); */

    let TimerId = null;

    let timerValue = document.getElementById('timer');

    function updateTimer(){
        let diff = endDate - new Date();

        if (diff < 1){
            clearInterval(TimerId);
            timerValue.textContent = 'Открывай!';
            lightPresent()
            openPresent();
        }
        else {
            let diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
            let diffHours = Math.floor(diff / 1000 / 60 / 60 % 24);
            let diffMinutes = Math.floor(diff / 1000 / 60 % 60);
            let diffSeconds = Math.floor(diff / 1000 % 60);

            let DaysText = diffDays < 10 ? 0 + diffDays.toString() : diffDays.toString();
            let HoursText = diffHours < 10 ? 0 + diffHours.toString() : diffHours.toString();
            let MinutesText = diffMinutes < 10 ? 0 + diffMinutes.toString() : diffMinutes.toString();
            let SecondsText = diffSeconds < 10 ? 0 + diffSeconds.toString() : diffSeconds.toString();

            /*timerValue.textContent = DaysText + ':' + HoursText + ':' + MinutesText + ':' + SecondsText;*/
            timerValue.textContent = HoursText + ':' + MinutesText + ':' + SecondsText;
        }
    }

    TimerId = setInterval(updateTimer, 1000);

    function openPresent(){
        let presentElement = document.getElementById('present');
        presentElement.onclick = function congrats(){
            presentElement.setAttribute('src', 'Images/presentLitOpened.png');
            presentElement.style.cursor = 'default';
            timerValue.textContent = 'С Новым Годом!';
        }
    }

    function lightPresent(){
        let presentElement = document.getElementById('present');
        presentElement.setAttribute('src', 'Images/presentToOpen.png')
        presentElement.style.cursor = 'pointer';
    }

});



