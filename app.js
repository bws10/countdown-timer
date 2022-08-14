// Set the date we're counting down to
var countDownDate = new Date("Aug 14, 2021 15:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var txt = "Stream Starting in ";
  var timer = "";
  if (days > 0) {
    timer = days + "d ";
    timer = timer + hours + "h ";
    timer = timer + minutes + "m ";
    timer = timer + seconds + "s ";
  }
  if (days == 0 && hours > 0) {
    timer = timer + hours + "h ";
    timer = timer + minutes + "m ";
    timer = timer + seconds + "s ";
  }
  if (days == 0 && hours == 0 && minutes > 0) {
    timer = timer + minutes + "m ";
    timer = timer + seconds + "s ";
  }
  if (days == 0 && hours == 0 && minutes == 0 && seconds > 0) {
    timer = timer + seconds + "s ";
  }

  // Output the result in an element with id="demo"
  document.getElementById("dots").classList.remove("dot-flashing");
  document.getElementById("txt").innerHTML = txt;
  document.getElementById("timer").innerHTML = timer;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    txt = "Stream starting soon";
    document.getElementById("txt").innerHTML = txt;
    document.getElementById("dots").classList.add("dot-flashing");
    document.getElementById("timer").innerHTML = "";
  }
}, 1000);
