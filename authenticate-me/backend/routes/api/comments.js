const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const { Comment } = require('../../db/models')

router.post('/', asyncHandler(async (req, res) => {
  const { userId, articleId, comment } = req.body

  const postComment = {
    userId,
    articleId,
    comment,
  }

  await Comment.create(postComment)
  return res.json(postComment)
}))

module.exports = router;