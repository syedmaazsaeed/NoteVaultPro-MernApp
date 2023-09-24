const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1:Get All the Notes using : GET "/api/notes/fetchallnotes" . login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    // catch errors
    console.error(error.message);
    res.status(500).send(" Oops! Internal Server Error");
  }
});
// Adding Endpoint.. post request . add new notes easily..
// ROUTE 2:Add a new Note  using : POST "/api/notes/addnote" . login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Correct title").isLength({ min: 4 }),
    body("description", "description must be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      // catch errors
      console.error(error.message);
      res.status(500).send("Oops! Internal Server Error");
    }
  }
);
// ROUTE 3:UPDATE an Existing Note  using : PUT "/api/notes/updatenote" . login required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create a newNote Object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    // Find the note to be Updated and update it .
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note Found");
    }
    // provide id to that note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    // catch errors
    console.error(error.message);
    res.status(500).send(" Oops! Internal Server Error");
  }
});
// ROUTE 4:DELETE  an Existing Note  using : DELETE "/api/notes/deletenote" . login required

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // verify it . same user to delete its your notes only.
    // Find the note to be Delete and delete it .
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note Found");
    }
    //  Allow deletion only if user owns this Note
    // provide id to that note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "Success ": "Note has been Deleted Successfully", note: note });
  } catch (error) {
    // catch errors
    console.error(error.message);
    res.status(500).send(" Oops! Internal Server Error");
  }
});

module.exports = router;
