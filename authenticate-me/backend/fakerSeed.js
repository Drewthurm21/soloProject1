const faker = require('faker')
const bcrypt = require('bcryptjs');

const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)

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


const seedFollows = (num) => {
  let i = 0

  while (i < num) {
    const follow = {
      userId: 104,
      authorId: randomNumber(100),
    }

    console.log(follow, ',')
    i++
  }
}

seedFollows(10)

/*                                   SEED STORIES FUNCTION                        */

// const seedStories = (num) => {
//   let i = 0
//   while (i < num) {
//     const story = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Short Article',
//       content: faker.lorem.paragraphs(2),
//       img: faker.image.business(240, 160)
//     }

//     const story2 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Short Article',
//       content: faker.lorem.paragraphs(2),
//       img: faker.image.business(400, 680)
//     }
//     const story3 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Short Article',
//       content: faker.lorem.paragraphs(2),
//       img: faker.image.business(640, 480)
//     }
//     const story4 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Medium Article',
//       content: faker.lorem.paragraphs(5),
//       img: faker.image.business(240, 160)
//     }
//     const story5 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Medium Article',
//       content: faker.lorem.paragraphs(5),
//       img: faker.image.business(400, 680)
//     }
//     const story6 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Medium Article',
//       content: faker.lorem.paragraphs(5),
//       img: faker.image.business(640, 480)
//     }
//     const story7 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Long Article',
//       content: faker.lorem.paragraphs(8),
//       img: faker.image.business(240, 160)
//     }
//     const story8 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Long Article',
//       content: faker.lorem.paragraphs(8),
//       img: faker.image.business(400, 680)
//     }
//     const story9 = {
//       authorId: randomNumber(100),
//       categoryId: randomNumber(20),
//       title: 'Long Article',
//       content: faker.lorem.paragraphs(8),
//       img: faker.image.business(640, 480)
//     }

//     console.log(story, ',')
//     console.log(story2, ',')
//     console.log(story3, ',')
//     console.log(story4, ',')
//     console.log(story5, ',')
//     console.log(story6, ',')
//     console.log(story7, ',')
//     console.log(story8, ',')
//     console.log(story9, ',')
//     i++
//   }
// }

// seedStories(30)

/*                                   SEED LIKES FUNCTION                                */

// const seedLikes = (num) => {
//   let i = 0
//   while (i < num) {
//     const like = {
//       userId: randomNumber(99),
//       postId: randomNumber(199),
//       liked: true,
//     }

//     console.log(like, ',')
//     i++
//   }
// }

// seedLikes(400)

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