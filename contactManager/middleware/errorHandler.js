 const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
        res.json({title:"Validation failed", message: err.message, stactTrace: err.stack})
        break;
        case constants.NOT_FOUND:
        res.json({title:"Not Found", message: err.message, stactTrace: err.stack})
        case constants.UNAUTHORIZED:
        res.json({title:"Un authorized", message: err.message, stactTrace: err.stack})
        case constants.FORBIDDEN:
        res.json({title:"forbidden", message: err.message, stactTrace: err.stack})     
        case constants.SERVER_ERROR:
        res.json({title:"Server Error", message: err.message, stactTrace: err.stack})  
        default:
        console.log("no error, ALL IS GOODm");
         break;
    }



}

module.exports = errorHandler


