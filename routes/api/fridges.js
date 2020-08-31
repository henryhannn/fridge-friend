const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Fridge = require('../../models/Fridge');
const validateFridgeInput = require('../../validation/fridges');

router.get('/', (req, res) => {
    Fridge.find()
        .sort({ date: -1 })
        .then(fridges => res.json(fridges))
        .catch(err => res.status(404).json({ nofridgesfound: 'No fridges found' }));
});

router.get('/user/:user_id', (req, res) => {
  Fridge.find({user: req.params.user_id})
      .then(fridges => res.json(fridges))
      .catch(err =>
          res.status(404).json({ nofridgefound: 'No fridges found from that user' }
      )
  );
});

router.get('/:id', (req, res) => {
    Fridge.findById(req.params.id)
        .then(fridge => res.json(fridge))
        .catch(err =>
            res.status(404).json({ nofridgefound: 'No fridge found with that ID' })
        );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFridgeInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFridge = new Fridge({
      name: req.body.name,
      category: req.body.category,
      user: req.user.id,
      expirationdate: req.body.expirationdate,
      imageurl: req.body.imageurl
    });

    newFridge.save().then(fridge => res.json(fridge));
  }
);

module.exports = router;