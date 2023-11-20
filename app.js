const express=require('express');
const app =express();
const morgan=require('morgan');
const secure=require('./api/v1/middlewares/secure')

app.use(secure);
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

const productRouter=require('./api/v1/routes/product');
const categoryRouter=require('./api/v1/routes/category');

app.use('/product',productRouter);
app.use('/category',categoryRouter);

app.all('*',(req,res)=>{
    res.status(404).json({msg:'not found'});
});
module.exports=app;