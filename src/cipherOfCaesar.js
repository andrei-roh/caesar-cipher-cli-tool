module.exports = function getCaesarCipher(string, shift) {
  const letters = 26;
  const alphabet = /[a-z]/i;
  const bigFirst = 'A'.charCodeAt();
  const bigLast = 'Z'.charCodeAt();
  const smallFirst = 'a'.charCodeAt();
  const smallLast = 'z'.charCodeAt();

  if (shift < 0) {
    return getCaesarCipher(string, shift + 26);
  };
	return result = string.split('').map(element => {
  	if (element.match(alphabet)) {
    	const charCode = element.charCodeAt();
      function decoder(letter) {
        return String.fromCharCode(letter + ((charCode + shift - letter) % letters))
      }
      (charCode >= bigFirst && charCode <= bigLast) ? element = decoder(bigFirst) : null;
      (charCode >= smallFirst && charCode <= smallLast) ? element = decoder(smallFirst) : null;
    }
    return element;
  }).join('');
};
