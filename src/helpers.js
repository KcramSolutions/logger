/**
 * Genera una cadena de texto ocupando el ancho dado
 * @param {string} text Texto a formatear
 * @param {number} width tamaño del espacio para el texto
 * @param {ALIGMENT} align alineamiento del texto
 * @param {number} spaceArround cantidad de espación al inicio y al final
 * @param {string} wrapper caracter de relleno
 */
function wrapText(text, width, align=ALIGMENT.LEFT ,spaceArround=1, wrapper = ' '){
	switch (align) {
		case ALIGMENT.LEFT:
			return wrapLeft(text, width, spaceArround, wrapper);
			break;
		case ALIGMENT.RIGHT:
			return wrapRight(text, width, spaceArround, wrapper);
		break;
		default:
			return wrapCenter(text, width, spaceArround, wrapper);
			break;
	}
}
/**
 * Genera una cadena de texto de un acho fijo con el texto a lineado
 * a la izquierda
 * @param {string} text texto a formatear
 * @param {number} width ancho
 * @param {number} space numero de espacios al inicio y al final
 * @param {string} wrapper cartacter de relleno para el espaciado
 * @returns {string} el texto formateado
 */
function wrapLeft(text,width,space, wrapper){
	const dif = (width - text.length);
	let out = filler(wrapper, space, "");
	out += filler(wrapper, dif, text);
	return filler(wrapper, space, out);
}

/**
 * Genera una cadena de texto de un acho fijo con el texto a lineado
 * a la derecha
 * @param {string} text texto a formatear
 * @param {number} width ancho
 * @param {number} space numero de espacios al inicio y al final
 * @param {string} wrapper cartacter de relleno para el espaciado
 * @returns {string} el texto formateado
 */
function wrapRight(text,width,space, wrapper){
	const dif = (width - text.length);
	let out = filler(wrapper, space, "");
	out += fillerInverse(wrapper, dif, text);
	return filler(wrapper, space, out);
}


/**
 * Genera una cadena de texto de un acho fijo con el texto a lineado
 * al centro
 * @param {string} text texto a formatear
 * @param {number} width ancho
 * @param {number} space numero de espacios al inicio y al final
 * @param {string} wrapper cartacter de relleno para el espaciado
 * @returns {string} el texto formateado
 */
function wrapCenter(text,width, space, wrapper){
	const dif = (width - text.length);
	const mid = parseInt(dif / 2);
	const isOdd = dif % 2 == 0;
	if((isOdd)){
		let out = filler(wrapper, mid + space);
		out += text;
		out = filler(wrapper, mid+space, out);
		return out;
	} 
	else{
		let out = filler(wrapper, mid + space);
		out += text;
		out = filler(wrapper, mid+(space+1), out);
		return out;
	}
	
}


function filler(char, qty, str = ''){
	if(qty <= 0) return str;
	else return filler(char, --qty, str + char);
}

function fillerInverse(char, qty, str = ''){
	if(qty <= 0) return str;
	else return fillerInverse(char, --qty, char + str);
}

const ALIGMENT = {
	LEFT: 0xA001,
	RIGHT: 0xA002,
	CENTER: 0xA003
}

/**
 * Compara el tamaño actual con el de un string nuevo
 * y devuelve el mayor de estos.
 * @param {number} current Tamaño actual
 * @param {string} text texto a comparar
 * @returns {number} el tamaño correspondiente
 */
function checkLenght(current, text){
	if(text.length > current){
		return  text.length;
	}
	return current;
}


function formatNumber(num, lenght = 1){
	const targetStr = new String(Math.pow(10, lenght));
	let numStr = new String(num);
	const dif = targetStr.length - numStr.length;
	if(dif <= 0) return numStr.toString();
	return fillerInverse('0', dif, numStr);
}

module.exports = {
	wrapLeft,
	wrapRight,
	wrapCenter,
	wrapText,
	ALIGMENT,
	checkLenght,
	formatNumber
}