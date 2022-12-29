const logger = require('./logger')

//console.log("hola, estoy saliendo por pantalla")
logger.info("Mensaje informativo")
logger.debug("Mensaje de debug")
logger.warn("Advertencia")
logger.error("mensaje de error")

//Niveles de winston

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};