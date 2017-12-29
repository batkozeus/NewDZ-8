// Task 1

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
keys.push(' ');

console.log(keys);

const toggleSound = document.querySelector("#slideThree");


let callback = (event) => {
	// if ((event.keyCode >=65 && event.keyCode <=90) || event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 191 || event.keyCode == 219 || event.keyCode == 221 || event.keyCode == 222 || event.keyCode == 32 ) {
	for (let i=0; i<keys.length; i++) {
		if (event.key == keys[i]) {

			if (event.key == buttons[i].innerHTML || event.key == ' ') {

				buttons[i].classList.add("keyboard__btn--active");
				setTimeout(() => {
			      buttons[i].classList.remove("keyboard__btn--active");
			    }, 300);

			    if (toggleSound.checked) {
			    	playSound(buttons[i].getAttribute('data-note'));
			    }

			}
		}
	}
	
}

window.addEventListener("keydown", callback);