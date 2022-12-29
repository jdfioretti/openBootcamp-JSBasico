
const winston = require('winston');

function arrojaError(valor) {
    throw new Error("Mi mensaje de Error personalizado")
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ]
});

try {
    throwError("Mensaje de Error")
} catch (error) {
    logger.error(error);
}



