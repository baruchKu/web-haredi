module.exports={
    getAllCategories:function(req,res){
        res.status(200).json({msg:"all categories"});
        res.end();
    },
    getCategoryById:function(req,res){},
    addCategory:function(req,res){},
    updateCategories:function(req,res){},
    deleteCategoryById:function(req,res){},

}