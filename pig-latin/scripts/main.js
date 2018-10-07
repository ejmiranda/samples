// let string = `apple`               // appleay
// let string = `banana`              // ananabay
// let string = `cherry`              // errychay
// let string = `eat pie`             // eatay iepay
// let string = `three`               // eethray
// let string = `school`              // oolschay
// let string = `quiet`               // ietquay
// let string = `square`              // aresquay (qu is a single phoneme)
// let string = `the quick brown fox` // ethay ickquay ownbray oxfay

// console.log(translate(string));

function translate(string) {
	let regexp = /([^aeioqu\s]*(?:qu)*)([a-z]+)/gi;
	return string.replace(regexp, `$2$1ay`);
}