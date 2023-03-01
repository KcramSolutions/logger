

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
	
	_activate(level){
		return level >= Logger.level
	}

	_prebuild(){
		const date = new Date();
		return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}

	log(...args){
		this._activate(LEVEL.LOG) && (console.log(`%c${this._prebuild()}`, 'color: #4287f5',' |   LOG   | ' ,...args));
	}


	info(...args){
		this._activate(LEVEL.INFO) && (console.info(`%c${this._prebuild()}`, 'color: #4287f5',' |  INFO   | ' ,...args));
	}



	debug(...args){
		this._activate(LEVEL.DEBUG) && (console.debug(`%c${this._prebuild()}`, 'color: #828282',' |  DEBUG  | ' ,...args));
	}



	warn(...args){
		this._activate(LEVEL.WARN) && (console.log(`%c${this._prebuild()}`, 'color: #ffc003',' |  WARN   | ' ,...args));
	}


	error(...args){
		this._activate(LEVEL.ERROR) && (console.log(`%c${this._prebuild()}`, 'color: #fa883c',' |  ERROR  | ' ,...args));
	}

	critical(...args){
		this._activate(LEVEL.CRITICAL) && (console.log(`%c${this._prebuild()}`, 'color: #fa3c3c',' | CRITICAL| ' ,...args));
	}
}

module.exports = {
	LEVEL,
	Logger
}