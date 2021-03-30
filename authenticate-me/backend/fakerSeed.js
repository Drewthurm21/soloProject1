const faker = require('faker')
const bcrypt = require('bcryptjs');


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

/*                                SEED FOLLOWS FUNCTION                                */


// const seedFollows = (num) => {
//   let i = 0

//   while (i < num) {
//     const follow = {
//       userId: Math.ceil(Math.random() * 100),
//       authorId: Math.ceil(Math.random() * 100),

//     }
//     console.log(follow, ',')
//     i++
//   }
// }
// seedFollows(100)

/*                                   SEED STORIES FUNCTION                        */

let i = 0
while (i < 50) {
  const story = {
    authorId: Math.floor(Math.random() * 100),
    categoryId: Math.floor(Math.random(19) * 10) + 1,
    title: 'Short Article',
    content: faker.lorem.paragraphs(2)
  }
  const story2 = {
    authorId: Math.floor(Math.random() * 100),
    categoryId: Math.floor(Math.random(19) * 10) + 1,
    title: 'Medium Article',
    content: faker.lorem.paragraphs(5)
  }
  const story3 = {
    authorId: Math.ceil(Math.random() * 100),
    categoryId: Math.ceil(Math.random(19) * 10) + 1,
    title: 'Long Article',
    content: faker.lorem.paragraphs(8)
  }
  console.log(story, ',')
  console.log(story2, ',')
  console.log(story3, ',')
  i++
}

