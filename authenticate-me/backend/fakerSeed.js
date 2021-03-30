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

// seedUsers(100)

/*                                SEED FOLLOWS FUNCTION                                */


// const seedFollows = (num) => {
//   let i = 0

//   while (i < num) {
//     const follow = {
//       userId: Math.floor(Math.random() * Math.floor(100)),
//       authorId: Math.floor(Math.random() * Math.floor(100)),

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
//       authorId: Math.floor(Math.random() * Math.floor(100)),
//       categoryId: Math.floor(Math.random() * Math.floor(20)),
//       title: 'Short Article',
//       content: faker.lorem.paragraphs(2)
//     }
//     const story2 = {
//       authorId: Math.floor(Math.random() * Math.floor(100)),
//       categoryId: Math.floor(Math.random() * Math.floor(20)),
//       title: 'Medium Article',
//       content: faker.lorem.paragraphs(5)
//     }
//     const story3 = {
//       authorId: Math.floor(Math.random() * Math.floor(100)),
//       categoryId: Math.floor(Math.random() * Math.floor(20)),
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

const seedLikes = (num) => {
  let i = 0
  while (i < num) {
    const like = {
      userId: Math.floor(Math.random() * Math.floor(100)),
      postId: Math.floor(Math.random() * Math.floor(150)),
      liked: true,
    }

    console.log(like, ',')
    i++
  }
}

seedLikes(100)