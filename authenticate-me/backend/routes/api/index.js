const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { setTokenCookie } = require('../../utils/auth.js');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

/*                           TEST ROUTES FOR USER AUTH                           */

// GET /api/set-token-cookie (test cookie setting)
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    },
  })
  setTokenCookie(res, user);
  return res.json({ user });
}));

//GET /api/restore-user (test JWT restoration)
router.get('/restore-user', restoreUser, (req, res) => res.json(req.user));


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;