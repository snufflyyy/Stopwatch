const timer = document.getElementById("timer");
let running = false;

let updateInterval = null;

let startTime = 0;
let elapsedTime = 0;

function start() {
	if (!running) {
		updateInterval = setInterval(update, 10);
		startTime = Date.now() - elapsedTime;
		running = true;
	}
}

function pause() {
	if (running) {
		clearInterval(updateInterval);
		running = false;
	}
}

function reset() {
	clearInterval(updateInterval);
	startTime = 0;
	elapsedTime = 0;
	running = false;
	timer.innerHTML = "00:00:00:00";
}

function update() {
	elapsedTime = Date.now() - startTime;

	let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
	let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
	let milliseconds = Math.floor((elapsedTime % 1000) / 10);

	timer.innerHTML = 
		String(hours).padStart(2, '0') + ":" + 
		String(minutes).padStart(2, '0') + ":" + 
		String(seconds).padStart(2, '0') + ":" + 
		String(milliseconds).padStart(2, '0');
}