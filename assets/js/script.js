let phrases = [
  { text: 'ПРИВЕТ МИР!' },
  { text: 'HELLO WORDL!' },
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