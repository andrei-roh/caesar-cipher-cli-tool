function getCaesarCipher(string, shift) {
  const letters = 26; //alphabet length
  const alphabet = /[a-z]/i; //regular expression for search
  const bigFirst = 'A'.charCodeAt(); //first uppercase letter
  const bigLast = 'Z'.charCodeAt(); //last uppercase letter
  const smallFirst = 'a'.charCodeAt(); //first lowercase letter
  const smallLast = 'z'.charCodeAt(); //last lowercase letter

  shift < 0 ? getCaesarCipher(string, shift + letters) : null;
	return result = string.split('').map(element => {
  	if (element.match(alphabet)) {
    	const charCode = element.charCodeAt();
      const decoder = (letter) => {
        return String.fromCharCode(letter + ((charCode + shift - letter) % letters))
      }
      (bigFirst <= charCode <= bigLast) ? element = decoder(bigFirst) : null;
      (smallFirst <= charCode <= smallLast) ? element = decoder(smallFirst) : null;
    }
    return element;
  }).join('');
};
