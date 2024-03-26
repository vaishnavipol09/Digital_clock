const clock = document.querySelector("#clock")
//const clock1 = document.getElementById("clock")


setInterval(function() {
let date = new Date()
clock.innerHTML = date.toLocaleTimeString()
}, 1000);