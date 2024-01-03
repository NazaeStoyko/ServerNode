const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      await pool.query(`DELETE FROM devices WHERE id = $1`, [id]);
      res.status(204).send(); // 204 No Content
    } catch (err) {
      console.error(err);
      res.status(500).send('Помилка видалення пристрою');
    }
  });
  
module.exports = router
