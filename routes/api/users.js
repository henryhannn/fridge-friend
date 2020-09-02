const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateShoppingListItem = require('../../validation/shoppingList');

router.get("/test", (req, res) => res.json({ msg: "This is the test users route" }));

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // Otherwise create a new user
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'This user does not exist'});
      }

      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const payload = {id: user.id, email: user.email};

          jwt.sign(
            payload,
            keys.secretOrKey,
            // Tell the key to expire in one hour
            {expiresIn: 3600},
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
        } else {
          return res.status(400).json({password: 'Incorrect password'});
        }
      })
    })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email
  });
});

router.get('/:id/shoppinglist', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user.shoppingList);
    });
});

// for editing shopping list, maybe add passport authentication 
router.patch('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (req.body.listItemId) {
        const item = user.shoppingList.id(req.body.listItemId);
        if (req.body.toggle) {
          item.done = !item.done;
        } else {
          item.remove();
        }
        user.save()
          .then(user => res.json(user.shoppingList));
      } else {
        const { errors, isValid } = validateShoppingListItem(req.body);

        if (!isValid) {
          return res.status(400).json(errors);
        }
        
        user.shoppingList.push({
          name: req.body.name,
          category: req.body.category,
          quantity: req.body.quantity,
          imageUrl: req.body.imageUrl,
          done: false
        });
        user.save()
          .then(user => res.json(user.shoppingList));
      }
    })
    .catch(err => res.status(400).json("Something went wrong"));
});

module.exports = router;