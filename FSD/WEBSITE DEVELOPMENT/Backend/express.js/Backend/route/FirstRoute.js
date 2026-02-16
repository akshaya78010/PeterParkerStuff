const express = require("express");
const FirstController = require("../controller/FirstController");
const router = express.Router();

router.get("/get-data", FirstController.firstApi);
router.post("/add-data", FirstController.adder);
// router.get("/send-mail",)
router.get(
  "/send-mail",
  (req, res, next) => {
    try {
      const decoded = JWT.verify(req, cookies.token, "Green-Goblin");
      console.log(decoded);
      Next();
    } catch (err) {
      return res.status(400).json("request rejected");
    }
  },
  FirstController.generateToken,
);

module.exports = router;
