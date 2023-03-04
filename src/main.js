const { checkLenght, formatNumber, wrapText, ALIGMENT } = require("./helpers");


const LEVEL = {
	DEBUG: 0,
	INFO: 1,
	LOG: 2,
	WARN: 3,
	ERROR: 4,
	CRITICAL: 5
};



class Logger{
	static level = LEVEL.LOG;
	static __max_length = 'LOGGER'.length;
	static __level_lenght = 10;
	name = 'LOGGER'
	/**
	 * Crea un nuevo logger
	 * @param {string} name Nombre del logger
	 */
	constructor(name = null){
		if(name){
			this.name = name.toUpperCase();
			Logger.__max_length = checkLenght(Logger.__max_length, name);
		}
	}
	_activate(level){
		return level >= Logger.level
	}

	_prebuild(levelStr = 'debug'){
		const date = new Date();
		const dateStr = `${formatNumber(date.getUTCDate())}/${formatNumber(date.getUTCMonth())}/${date.getFullYear()} ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}:${formatNumber(date.getSeconds())}`;
		const level = wrapText(` ${levelStr.toUpperCase()} `, Logger.__level_lenght, ALIGMENT.CENTER,3, '█');
		const name = wrapText(this.name, Logger.__max_length, ALIGMENT.RIGHT);
		return `╠═══╣ ${dateStr}├──╢${level}├──╢${name}├──`;
	}

	log(...args){
		this._activate(LEVEL.LOG) && (console.log(`%c${this._prebuild('log')}`, 'color: #4287f5',...args));
	}

	info(...args){
		this._activate(LEVEL.INFO) && (console.info(`%c${this._prebuild('INFO')}`, 'color: #4287f5',...args));
	}



	debug(...args){
		this._activate(LEVEL.DEBUG) && (console.debug(`%c${this._prebuild()}`, 'color: #828282',...args));
	}



	warn(...args){
		this._activate(LEVEL.WARN) && (console.log(`%c${this._prebuild('WARN')}`, 'color: #ffc003',...args));
	}


	error(...args){
		this._activate(LEVEL.ERROR) && (console.log(`%c${this._prebuild('ERROR')}`, 'color: #fa883c',...args));
	}

	critical(...args){
		this._activate(LEVEL.CRITICAL) && (console.log(`%c${this._prebuild('CRITICAL')}`, 'color: #fa3c3c',...args));
	}
}

module.exports = {
	LEVEL,
	Logger,
	formatNumber,
	wrapText,
	ALIGMENT
}