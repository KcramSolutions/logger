const assert = require('assert');
const { Logger, LEVEL } = require('../src/main')

const logger = new Logger();

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