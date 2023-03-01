# Logger Simple para la organización

Simple logger para los proyecto de node.

Instalación:
```
npm install @kcram-solutions/logger
```

```javascript
// importamos la librería
const { Logger, LEVEL } = require('@kcram-solutions/logger')

const logger = new Logger();

Logger.level = LEVEL.DEBUG // INFO | LOG | WARN | ERROR | CRITICAL

logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')
```

## Todo:
- [ ] Formato a los número en fechas y horas
- [ ] Agregar color en la salida estandar
- [ ] Separar archivos para node y navegador