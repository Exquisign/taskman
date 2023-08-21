
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new customAPIError(msg, StatusCode)
}

module.exports = {CustomAPIError, createCustomError}

