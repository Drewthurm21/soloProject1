const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const { Story, User, Like, Follow } = require('../../db/models')

//return all stories
router.get('/', asyncHandler(async (req, res) => {
  const result = await Story.findAll()

  res.json({ result })
}))

//get stories by category
router.get('/category/:id', asyncHandler(async (req, res) => {
  let stories = await Story.findAll({ where: { categoryId: req.params.id } })

  res.json({ stories })
}))

//return stories by followed Authors
router.get('/followed/:id', asyncHandler(async (req, res) => {
  let favAuthors = await Follow.findAll({ where: { userId: req.params.id } })

  const favAuthorIds = favAuthors.map(author => {
    return author.authorId
  })

  const stories = await Story.findAll({
    where: { authorId: favAuthorIds },
    order: [['createdAt', 'DESC']]
  })
  console.log(stories)

  res.json({ stories })
}))

//get 10 most popular stories 
router.get('/top', asyncHandler(async (req, res) => {
  let stories = await Story.findAll({ include: Like })

  stories.sort((a, b) => b.Likes.length - a.Likes.length)
  topStories = stories.slice(0, 10)

  res.json({ topStories })
}))

//return 15 newest stories
router.get('/recent', asyncHandler(async (req, res) => {
  let newStories = await Story.findAll({
    order: [['updatedAt', 'DESC']],
    limit: 15
  })

  res.json({ newStories })
}))

//return a single story by id
router.get('/story/:id', asyncHandler(async (req, res) => {
  const story = await Story.findByPk(req.params.id)
  res.json({ story })
}))


//return all stories by an author
router.get('/byauthor/:id', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    where: { authorId: req.params.id }
  })

  res.json({ stories })
}))



// //post a new story
// router.post('/post', asyncHandler(async (req, res) => {
// }))

module.exports = router;