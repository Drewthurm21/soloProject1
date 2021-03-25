const router = require('express').Router();
const asyncHandler = require('express-async-handler')

const { setTokenCookie, restoreUser } = require('../../utils/auth.js')
const { User } = require('../../db/models')


// Log in
router.post('/', asyncHandler(async (req, res, next) => {
  const { credential, password } = req.body;
  const user = await User.login({ credential, password });

  if (!user) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['The provided credentials were invalid.'];
    return next(err);
  }

  await setTokenCookie(res, user);

  return res.json({ user });
}));

//Restore user session
router.get('/', restoreUser, (req, res) => {
  const { user } = req;

  if (user) {
    return res.json({
      user: user.toSafeObject()
    });
  }

  return res.json({});
});

// Log out
router.delete('/', (_req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'successfully logged out' });
});

module.exports = router;


/*                            TEST FETCHES FOR JWT AUTH                                      */
/*                 DONT FORGET TO COPY PASTE YOUR XSRF-TOKEN VALUE                           */

//VALID USER BY USERNAME
// fetch('/api/session', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//   },
//   body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
// }).then(res => res.json()).then(data => console.log(data));

// VALID USER BY EMAIL
// fetch('/api/session', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//   },
//   body: JSON.stringify({ credential: 'demo@user.io', password: 'password' })
// }).then(res => res.json()).then(data => console.log(data));

//INVALID USER
// fetch('/api/session', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//   },
//   body: JSON.stringify({ credential: 'Demo-lition', password: 'Hello World!' })
// }).then(res => res.json()).then(data => console.log(data));

//LOGOUT CURRENT USER
// fetch('/api/session', {
//   method: 'DELETE',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//   }
// }).then(res => res.json()).then(data => console.log(data));