const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var filamentSchema = new mongoose.Schema({
  ID: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  materialType: { type: String },
  spoolWeight: { type: Number },
  colour: { type: String },
  colourName: { type: String },
  density: { type: String },
  recommendedHotend: { type: Number },
  bedTemperature: { type: Number },
  chamberTemperature: { type: Number },
  meltFlowIndex: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});
filamentSchema.plugin(mongoosePaginate);
var filamentModel = mongoose.model("filaments", filamentSchema);
module.exports = filamentModel;
