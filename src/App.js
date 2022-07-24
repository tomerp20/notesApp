import React, { useState, useEffect } from "react";
import  Grid  from "@mui/material/Grid";
import Header from "./Components/Header";
import Notelist from "./Components/NoteList";
import Form from "./Components/Form";
import NoteModal from './Components/NoteModal'
import { loadNotes, storeNotes } from "./helpers/utils";

function App() {
  const [notes, setNotes] = useState([]);
  const [triggerModal, setTriggerModal] = useState(false); // should trigger modal
  const [selectedNote, setSelectedNote] = useState(null); // id to archive, modify

  
  useEffect(() => {
    loadNotes(setNotes);
  }, []);

  useEffect(() => {
    if (notes.length) storeNotes(notes);
  }, [notes]);


  const createNote = (newNote) => setNotes([...notes, newNote]) 
  const updateNote = (index, newNote) => {
    const newNotes = [ ...notes ]; // hard copying the state
    newNotes[index] = newNote;
    setTriggerModal(false);
    setSelectedNote(null);
    setNotes(newNotes);
  };
  
  const deleteNote = noteIndex => {
    if(window.confirm('Are you sure you want to delete this note?')) {
      const newNotesArray = [...notes];
      newNotesArray.splice(noteIndex, 1)
      setNotes(newNotesArray)
    }
  }
  const modifyNote = (noteIndex) => {
    setTriggerModal(true);
    setSelectedNote(noteIndex);
  };
  
  return (
    <div className="App">
      {triggerModal && (
        <NoteModal
          updateNote={updateNote}
          closeModal={() => setTriggerModal(false)}
          note={notes[selectedNote]}
          noteIndex={selectedNote}
        ></NoteModal>
      )}
      <Grid container item>
        <Header></Header>
      </Grid>
      <Grid container>
        <Grid item xs={false} sm={2} md={3} />
        <Grid container item direction="column" xs={12} sm={8} md={6}>
          <Form createNote={createNote} type={"create"}></Form>
        </Grid>
        <Grid item xs={false} sm={2} md={3} />
      </Grid>
      <Notelist  notes={notes} deleteNote={deleteNote} modifyNote={modifyNote} />
    </div>
  );
}

export default App;
