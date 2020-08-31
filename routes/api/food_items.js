const express = require("express");
const router = express.Router();
const FoodItem = require('../../models/FoodItem');

router.get("/test", (req, res) => {
  res.json({ msg: 'this is the food items route' });
});

router.get("/", (req, res) => {
  FoodItem.find()
    .then(foods => res.json({ foods }));
})

// route just to test on postman/seeding, don't use in production
router.post("/", (req, res) => {
  FoodItem.findOne({ name: req.body.name })
    .then(food => {
      if (food) {
        return res.status(400).json({name: 'That food item has already been created'});
      } else {
        const newFood = new FoodItem({
          name: req.body.name,
          category: req.body.category,
          imageUrl: req.body.imageUrl
        });
        newFood.save()
          .then(food => {
            res.json({ food });
          });
      }
    })
})


module.exports = router;