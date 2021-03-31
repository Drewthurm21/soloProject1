const faker = require('faker')
const bcrypt = require('bcryptjs');

// const randomNumber = (num) => Math.floor(Math.random() * Math.floor(100))

/*                                  USER SEED FUNCTION                                */

// const seedUsers = (num) => {
//   let i = 0

//   while (i < num) {
//     const user = {
//       email: faker.internet.email(),
//       username: faker.internet.userName(),
//       hashedPassword: bcrypt.hashSync(faker.internet.password())
//     }

//     console.log(user, ',')
//     i++
//   }
// }

// seedUsers(100)

/*                                SEED FOLLOWS FUNCTION                                */


// const seedFollows = (num) => {
//   let i = 0

//   while (i < num) {
//     const follow = {
//       userId: randomNumber(100),
//       authorId: randomNumber(100),
//     }

//     console.log(follow, ',')
//     i++
//   }
// }

// seedFollows(100)

/*                                   SEED STORIES FUNCTION                        */

// const seedStories = (num) => {
//   let i = 0
//   while (i < num) {
//     const story = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Short Article',
//       content: faker.lorem.paragraphs(2)
//     }
//     const story2 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Medium Article',
//       content: faker.lorem.paragraphs(5)
//     }
//     const story3 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Long Article',
//       content: faker.lorem.paragraphs(8)
//     }

//     console.log(story, ',')
//     console.log(story2, ',')
//     console.log(story3, ',')
//     i++
//   }
// }

// seedStories(150)

/*                                   SEED LIKES FUNCTION                                */

// const seedLikes = (num) => {
//   let i = 0
//   while (i < num) {
//     const like = {
//       userId: randomNumber(100),
//       postId: randomNumber(150),
//       liked: true,
//     }

//     console.log(like, ',')
//     i++
//   }
// }

// seedLikes(100)

/*                                   SEED COMMENTS FUNCTION                                */

// const seedComments = (num) => {
//   let i = 0

//   while (i < num) {
//     const comment = {
//       userId: randomNumber(100),
//       articleId: randomNumber(150),
//       comment: faker.lorem.sentences(1)
//     }
//     const comment2 = {
//       userId: randomNumber(100),
//       articleId: randomNumber(150),
//       comment: faker.lorem.sentences(3)
//     }
//     const comment3 = {
//       userId: randomNumber(100),
//       articleId: randomNumber(150),
//       comment: faker.lorem.sentences(5)
//     }

//     console.log(comment, ',')
//     console.log(comment2, ',')
//     console.log(comment3, ',')
//     i++
//   }
// }

// seedComments(200)