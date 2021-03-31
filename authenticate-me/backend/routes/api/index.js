const router = require('express').Router();

const { User } = require('../../db/models');
const { restoreUser, setTokenCookie } = require('../../utils/auth.js');

const usersRouter = require('./users.js');
const sessionRouter = require('./session.js');
const asyncHandler = require('express-async-handler');
const storiesRouter = require('./stories.js')


//GET /api/restore-user (test JWT restoration)
router.get('/restore-user', restoreUser, (req, res) => res.json(req.user));
router.use('/stories', storiesRouter)
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

module.exports = router;



/*                           TEST ROUTES FOR USER AUTH                           */

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

// // GET /api/set-token-cookie (test cookie setting)
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//     where: { username: 'Demo-lition' },
//   })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));