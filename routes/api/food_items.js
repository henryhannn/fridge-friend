const express = require("express");
const router = express.Router();
const FoodItem = require('../../models/FoodItem');

// food items test route
router.get("/test", (req, res) => {
  res.json({ msg: 'this is the food items route' });
});

// food index route
router.get("/", (req, res) => {
  FoodItem.find()
    .then(foods => {
      const foodItems = {};
      foods.forEach((food) => foodItems[food.id] = food);
      res.json(foodItems);
    });
});

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