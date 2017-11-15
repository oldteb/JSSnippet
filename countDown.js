// Count Down Timer
// JS Fiddle: https://jsfiddle.net/oldteb/h8a3eqLh/

var counterFunc = function(){
	let count = 10
	var cd = document.getElementById("countDown")
	return function(){
  	cd.innerHTML = count + ""
    count--
    if(count < 0)
  		clearInterval(timer)
  }
}()

var timer = setInterval(counterFunc, 1000)