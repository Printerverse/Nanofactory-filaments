var filamentModel = require("../models/filament");

const mongoose = require("mongoose");

exports.getFilaments = function (req, res, next) {
  var id = req.params.userid;
  var getwatchlist = filamentModel.find(
  
  );
  getwatchlist
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "OK",
        results: data,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getsingleFilament = function (req, res, next) {
  var filamentId = req.params.id;
  var singlewatchlist = filamentModel.find(
    { _id: filamentId },
  );
  singlewatchlist
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "OK",
        results: data,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.addFilament = function (req, res, next) {
  var filamentDetails = new filamentModel({
    ID: "10",
    name: "test10",
    description: "It's a filament",
    materialType: "Premium",
    spoolWeight: 1000,
    colour: "#656565",
    colourName: "Navy blue",
    density: 1.25,
    recommendedHotend: 120,
    bedTemperature: 150,
    chamberTemperature: 150,
    meltFlowIndex: 2,
  });
  filamentDetails
    .save()
    .then((doc) => {
      res.json({
        message: "filament created Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};
