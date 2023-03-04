const assert = require('assert');
const { wrapLeft, wrapRight, wrapCenter, formatNumber } = require('../src/helpers');
const { Logger, LEVEL } = require('../src/main')

const logger = new Logger('Perron');
const log1 = new Logger('asdad asdadsa sad');

console.log('%s| LOG LEVEL: DEBUG |%s',"-".repeat(15), "-".repeat(15));
Logger.level = LEVEL.DEBUG
logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')

console.log('\n%s| LOG LEVEL: INFO |%s',"-".repeat(15), "-".repeat(15));
Logger.level = LEVEL.INFO
logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')

console.log('\n%s| LOG LEVEL: LOG |%s',"-".repeat(15), "-".repeat(15));
Logger.level = LEVEL.LOG
logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')

console.log('\n%s| LOG LEVEL: WARN |%s',"-".repeat(15), "-".repeat(15));
Logger.level = LEVEL.WARN
logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')

console.log('\n%s| LOG LEVEL: ERROR |%s',"-".repeat(15), "-".repeat(15));
Logger.level = LEVEL.ERROR
logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')

console.log('\n%s| LOG LEVEL: CRITICAL |%s',"-".repeat(15), "-".repeat(15));
Logger.level = LEVEL.CRITICAL
logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')


Logger.level = LEVEL.LOG;
logger.log('Text Wrapper: size: 20:', wrapLeft('Hola', 12, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapRight('Hola', 12, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapCenter('Hola', 12, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapCenter('Holas', 12, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapLeft('Hola', 11, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapRight('Hola', 11, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapCenter('Hola', 8, 2, '='), 'End of message')
logger.log('Text Wrapper: size: 20:', wrapCenter('Holasadsasd', 11, 2, '='), 'End of message')

logger.log('\n\t', formatNumber(1, 0), ' => 001\n\t',formatNumber(9,1), ' => 09' );

