module.exports={
  getAllProducts:function(req,res){
    res.status(200).json({msg:'all Products'});
    res.end();
  },
  getProductById:function(req,res){},
  addProduct:function(req,res){
    console.log(req.body);
    return res.status(200).json({msg:`product ${req.body.Pid} added successfuly`});
  },
  updateProduct:function(req,res){},
  deleteProductById:function(req,res){},
}