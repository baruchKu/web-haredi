const router=require('express').Router();
const{
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProductById

}=require('../controllers/product');

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.patch('/:',updateProduct);
router.delete('/:',deleteProductById);
router.post('/',addProduct);

module.exports=router;