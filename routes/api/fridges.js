const express = require('express');
const router = express.Router();
const Fridge = require('../../models/Fridge');
const mongoose = require('mongoose');
const passport = require('passport');

// const validateFridgeInput = require('../../validation/fridges');

router.get('/', (req, res) => {
    Fridge.find()
        .sort({ date: -1 })
        .then(fridges => res.json(fridges))
        .catch(err => res.status(404).json({ nofridgesfound: 'No fridges found' }));
});

router.get('/user/:user_id', (req, res) => {
  Fridge.find({user: req.params.userId})
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

router.post('/', (req, res) => {
  Fridge.findOne({ name: req.body.name })
    .then(fridge => {
      if (fridge) {
        return res.status(400).json({name: 'That fridge name is taken'});
      } else {
        const newFridge = new Fridge({
          name: req.body.name
        });
        newFridge.participants.push(req.body.userId);
        newFridge.save()
          .then(fridge => {
            res.json({ fridge });
          });
      }
    })
});

module.exports = router;