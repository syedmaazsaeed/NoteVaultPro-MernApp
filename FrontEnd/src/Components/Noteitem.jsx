import { React, useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const Noteitem = ({ note, updateNote, showAlert }) => {
  const { deleteNote } = useContext(noteContext);
  const cardStyle = {
    backgroundColor: "#7CFFCB", // Set the background color here
  };
  return (
    <div className="col-md-3">
      <div className="card my-3" style={cardStyle}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-3"
              onClick={() => {
                deleteNote(note._id);
                showAlert("Note Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>{" "}
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
