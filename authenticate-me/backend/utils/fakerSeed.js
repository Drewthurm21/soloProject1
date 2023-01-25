const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

//simple random number generator
const rNum = (num) => Math.floor(Math.random() * Math.floor(num) + 1)


const seedUsers = (num) => {
  let users = new Array(num).fill('')

  for (const i in users) {
    users[i] = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      hashedPassword: bcrypt.hashSync(faker.internet.password())
    }
  }

  return users
}


const seedFollows = (num) => {
  let follows = new Array(num).fill('')
  for (const i in follows) { follows[i] = { userId: rNum(100), authorId: rNum(100) } }
  return follows
}


const seedStories = (num) => {
  let stories = new Array(num).fill('')

  for (const i in stories) {
    stories[i] = {
      authorId: rNum(100),
      categoryId: rNum(20),
      title: faker.lorem.sentence(3),
      content: faker.lorem.paragraph(rNum(10)),
      img: faker.image.cats()
    }
  }

  return stories
}


const seedLikes = (num) => {
  let likes = new Array(num).fill('')

  for (const i in likes) {
    likes[i] = { userId: rNum(100), postId: rNum(500), liked: true }
  }

  return likes
}


const seedComments = (num) => {
  let comments = new Array(num).fill('')

  for (const i in comments) {
    comments[i] = {
      userId: rNum(100),
      articleId: rNum(500),
      comment: faker.lorem.sentence(5)
    }
  }

  return comments
}

module.exports = {
  seedUsers,
  seedFollows,
  seedStories,
  seedLikes,
  seedComments
}

