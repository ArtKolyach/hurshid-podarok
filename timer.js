
document.addEventListener("DOMContentLoaded", function () {

    const endDate = new Date(2022, 11, 30,  16, new Date().getMinutes(), new Date().getSeconds() + 5);

    let TimerId = null;

    let timerValue = document.getElementById('timer');

    function updateTimer(){
        let diff = endDate - new Date();

        if (diff < 1){
            clearInterval(TimerId);
            timerValue.textContent = 'Открывай!';
            openPresent();
        }
        else {
            let diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
            let diffHours = Math.floor(diff / 1000 / 60 / 60 % 24);
            let diffMinutes = Math.floor(diff / 1000 / 60 % 60);
            let diffSeconds = Math.floor(diff / 1000 % 60);

            timerValue.textContent = diffDays.toString() + ':' + diffHours.toString() + ':' + diffMinutes.toString() + ':' + diffSeconds.toString();
        }
    }

    TimerId = setInterval(updateTimer, 1000);

    function openPresent(){
        let presentClick = document.getElementById('present');
        let presentClicked = document.getElementById('presentBox2');
        console.log(presentClick);
        console.log(presentClicked.innerHTML);
        presentClick.onclick = function congrats(){
            presentClick = presentClicked.innerHTML;
        }
    }

});



