var express = require("express");
var router = express.Router();

const filamentController = require("../controller/filamentController");

// get All Category Route
router.get("/", function (req, res, next) {
  res.send("hello api");
});
router.get("/getFilaments/", filamentController.getFilaments);

router.get("/getFilament/:id", filamentController.getsingleFilament);

router.post("/add-filament",filamentController.addFilament);

module.exports = router;
