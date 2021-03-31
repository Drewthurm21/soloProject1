const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const { Story, User } = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
  const result = await Story.findAll()

  res.json({ result })
}))


module.exports = router;