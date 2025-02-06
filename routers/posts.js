//importo express
const express = require('express')

//importo router per gestire le rotte
const router = express.Router()

//importo le funzioni del controller
const postController = require('../controllers/postController');

// rotte di CRUD dei post

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

//store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);
    
// destroy
router.delete('/:id', postController.destroy);


//esporto il modulo del router
module.exports = router;