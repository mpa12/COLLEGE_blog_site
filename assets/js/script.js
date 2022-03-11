let phrases = [
  { text: 'ПРИВЕТ МИР!' },
  { text: 'HELLO WORLD!' },
  { text: 'ПРИВІТ СВІТ!' },
  { text: 'HALLO WELT!' },
  { text: 'POZDRAV SVIJETE!' }
];

let phrase = document.querySelector('.hello');
let countPhrase = 0;

function changePhrase() {
	if (countPhrase >= phrases.length) {
		countPhrase = 0;
	}
	smoothly(phrase, 'textContent', phrases[countPhrase].text);
}

setInterval(function() {
	countPhrase += 1;
	changePhrase();
}, 2000);

window.onload = function() {
	let objsForAnimate = [];

	function changeObjs() {
		let obj = document.getElementsByClassName('label')[0];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('label')[1];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('photo__img')[0];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('photo__img')[1];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('description')[0];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('description')[1];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('work')[0];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('work')[1];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('work')[2];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);

		obj = document.getElementsByClassName('urls')[0];
		objsForAnimate.push([obj, obj.offsetTop, obj.offsetTop + obj.offsetHeight]);
	};

	changeObjs();

	function animate() {
		let scrollBottom = window.scrollY + window.innerHeight;
		let scrollTop = window.scrollY;

		for (let i = 0; i < objsForAnimate.length; i++) {
			if ((scrollBottom >= objsForAnimate[i][1])) {

				let object = objsForAnimate[i][0];
				let classActive = object.classList[0] + '-active';

				if (!object.classList.contains(classActive)) {
					object.classList.add(classActive);
				}
			} else {

				let object = objsForAnimate[i][0];
				let classActive = object.classList[0] + '-active';

				object.classList.remove(classActive);
			}

			if (scrollTop >= objsForAnimate[i][2]) {

				let object = objsForAnimate[i][0];
				let classActive = object.classList[0] + '-active';

				object.classList.remove(classActive);
			}
		}
	}

	window.onscroll = function() {
		animate();
	}

	window.onresize = function() {
		changeObjs();
	}
}
