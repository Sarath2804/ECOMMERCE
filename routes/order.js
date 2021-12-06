const Order = require("../models/order");

const router = require("express").Router();

//CREATE

router.post("/create",  async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/update/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET USER ORDERS
router.get("/find/:order_id",  async (req, res) => {
  try {
    const orders = await Order.find({ order_id: req.params.order_id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET ORDER WITH DATE
router.get("/list/:order_date",  async (req, res) => {
    try {
      const orders = await Order.find({ order_date: req.params.order_date });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


// //GET ALL

router.get("/getall", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;