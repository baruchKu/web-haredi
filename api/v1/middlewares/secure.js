module.exports=(req,res,next)=>{
    console.log(`mathod: ${req.method} url: ${req.url}`);
    next();
};