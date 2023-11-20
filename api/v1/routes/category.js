const router=require('express').Router();
const{
   getAllCategories,
   getCategoryById,
   addCategory,
   updateCategories,
   deleteCategoryById

}=require('../controllers/category');

router.get('/',getAllCategories);
router.get('/:id',getCategoryById);
router.patch(':id',updateCategories);
router.delete('/:id',deleteCategoryById);
router.post('/',addCategory);

module.exports=router;