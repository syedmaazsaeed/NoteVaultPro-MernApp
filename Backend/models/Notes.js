const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
  // notes associate each user access  has its own notes so we adding fields
  // When user put it notes other user cannot be seen this notes.  Notes associate/link user

  user: {
    // Same as Foreign key . The user will store the Object Id of another model here ..

    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
