const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

const seedUsers = (num) => {
  let users = new Array(num).fill('')
  for (const i in users) {
    users[i] = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      hashedPassword: bcrypt.hashSync(faker.internet.password())
    }
  }
  return users
}

const seedFollows = (num) => {
  let follows = new Array(num).fill('')
  for (const i in follows) follows[i] = { userId: 1, authorId: randomNumber(100) }
  return follows
}

const seedStories = (num) => {
  let stories = new Array(num).fill('.')
  for (const i in stories) {
    story[i] = {
      authorId: randomNumber(100),
      categoryId: randomNumber(20),
      title: 'Short Article',
      content: faker.lorem.paragraphs(2),
      img: faker.image.business(240, 160)
    }
  }

  return stories
}

const seedLikes = (num) => {
  let likes = new Array(num).fill('.')
  for (const i in likes) {
    likes[i] = {
      userId: randomNumber(99),
      postId: randomNumber(199),
      liked: true,
    }
  }
  return likes
}

const seedComments = (num) => {
  let comments = new Array(num).fill('')
  for (const i in comments) {
    comments[i] = {
      userId: randomNumber(100),
      articleId: randomNumber(150),
      comment: faker.lorem.sentences(1)
    }
  }
  return comments
}

module.exports = {
  seedComments,
  seedFollows,
  seedLikes,
  seedStories,
  seedUsers,
}