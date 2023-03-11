# Logger Simple para la organización [![Verified on Openbase](https://badges.openbase.com/js/verified/@kcram-solutions/logger.svg?style=openbase&token=gaASWyYL+oAwrnSZ6ZwrrkZPO8p1acapq1mOp4apJVs=)](https://openbase.com/js/@kcram-solutions/logger?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge) 

[![Socket Badge](https://socket.dev/api/badge/npm/package/@kcram-solutions/logger)](https://socket.dev/npm/package/@kcram-solutions/logger) [![](https://data.jsdelivr.com/v1/package/npm/@kcram-solutions/logger/badge)](https://www.jsdelivr.com/package/npm/@kcram-solutions/logger)
 ![NPM](https://img.shields.io/npm/l/@kcram-solutions/logger?style=flat-square)
 ![npm](https://img.shields.io/npm/v/@kcram-solutions/logger?style=flat-square)

Simple logger para los proyecto de node.

Instalación:

**NPM**
```
npm install @kcram-solutions/logger
```
**Navegador**


```html
<script type="module">
import {Logger} from 'https://esm.run/@kcram-solutions/logger';

let logger = new Logger('App');
</script>
```
```javascript
// importamos la librería
const { Logger, LEVEL } = require('@kcram-solutions/logger')

const logger = new Logger(?name);

Logger.level = LEVEL.DEBUG // INFO | LOG | WARN | ERROR | CRITICAL

logger.debug('Hola from debug')
logger.info('Hola from info')
logger.log('Hola from log')
logger.warn('Hola from warn')
logger.error('Hola from error')
logger.critical('Hola from critical')
```

## Todo:
- [x] Formato a los número en fechas y horas
- [ ] Agregar color en la salida estandar
- [ ] Separar archivos para node y navegador