const AppError = require("../Utils/appError");

const handleCastErrorDB = err=>{
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message,400)
}


const handleDuplicateFieldsBD = err=>{
    const value = err.errmsg.match(/(?<=")(?:\\.|[^"\\])*(?=")/)
    const message = `Duplicate fields values ${value}. Please use another value`;
    return new AppError(message,400)
}

const handleValidationError = err=>{
    const errors = Object.values(err.errors).map(el =>el.message);
    const message = `Invalid input Data. ${errors.join(". ")} `;
    return new AppError(message,400)
}


const handleJWTError = () => new AppError("Invalid token, Please login again",401)

const handleJWTExpiredError = ()=> new AppError("Your Token got expired . Please login again",401)

const sendErrorDev = (err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        error:err,
        stack:err.stack,
    })
}

const sendErrorPro = (err,res)=>{
    if(err.isOperational){
        res.status(err.statusCode).json({
            status:err.status,
            message:err.message,
        });
    }else{
        res.status(500).json({
            status:"error",
            message:"Something went very wrong"
        })
    }
}
// module.exports = (err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || "error";
    
//     if(process.env.NODE_ENV === "development"){
//         sendErrorDev(err,res)
//     }else if(process.env.NODE_ENV ==="production"){
//         let error = {...err};
//         if(error.name === "CastError") error=handleCastErrorDB(error);
//         if(error.code === 11000) error=handleDuplicateFieldsBD(error);
//         if(error.name === "ValidationError") error=handleValidationError(error);
//         if(error.name === "JsonWebTokenError") error = handleJWTError();
//         if(error.name === "TokenExpiredError") error = handleJWTExpiredError();
//         sendErrorPro(error,res)
//     }
//     next();
// }