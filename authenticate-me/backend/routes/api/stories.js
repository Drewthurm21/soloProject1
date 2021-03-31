const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const { Story, User } = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
  const result = await Story.findAll()

  res.json({ result })
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const story = await Story.findByPk(req.params.id)
  res.json({ story })
}))

router.get('/:authorId/all', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({ where: { authorId: req.params.authorId } })
  res.json({ stories })
}))

module.exports = router;