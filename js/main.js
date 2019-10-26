document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll
    (function () {
        scrollTo();
    })();

    function scrollTo() {
        const links = document.querySelectorAll('.scroll');
        links.forEach(each => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({
            top: originalTop,
            left: 0,
            behavior: 'smooth'
        });
        const checkIfDone = setInterval(function () {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }


    // turn off the menu
    const menu = document.querySelector('.menu');
    console.log(menu);
    const ckeckbox = document.querySelector('.toggler')
    menu.addEventListener('click', () => ckeckbox.checked = false);
    // console.log(checkbox)


    // Time conut down
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 6, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("counter").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    // Small with error
});