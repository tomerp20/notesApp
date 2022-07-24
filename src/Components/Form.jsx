import { useState, useEffect } from "react";
// import DateFnsUtils from "@date-io/date-fns";
import { } from "@mui/material";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import reminderModel from "../helpers/reminderModel";
import noteModel from "../helpers/noteModel";
import { Card, CardContent, Button, Typography, Box, TextField, Checkbox, CardActions  } from "@mui/material"



function Form({ type, createNote, note, cancel }) {
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);
 // const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  let title, confirmButton, cancelButton;


  useEffect(() => {
    if (note) {
      setNoteTitle(note.title);
      setNoteBody(note.body);
      if (note.shouldRemind) {
        //setSelectedDate(note.reminderDay);
        setIsChecked(true);
      }
    }
  }, [note]);

  // const handleDateChange = (pickerDate) => {
  //   const time = new Date(selectedDate.getTime()); // clonning
  //   time.setDate(pickerDate.getDate());
  //   time.setMonth(pickerDate.getMonth());
  //   time.setFullYear(pickerDate.getFullYear());
  //   time.setSeconds(0);
  //   //setSelectedDate(time);
  // };

  // const handleHourChange = (pickerDate) => {
  //   const time = new Date(selectedDate.getTime()); // clonning
  //   time.setHours(pickerDate.getHours());
  //   time.setMinutes(pickerDate.getMinutes());
  //   time.setSeconds(0);
  //  // setSelectedDate(time);
  // };

  const resetForm = () => {
    setNoteBody("");
    setNoteTitle("");
    // setIsChecked(false);
    // setSelectedDate(new Date(Date.now()));
  };

  const submitNote = (e) => {
    e.preventDefault();
    const note = noteModel(noteBody, noteTitle, false);
    createNote(note);
    resetForm();
  };

  const switchForm = () => {
    switch (type) {
      case "update":
        title = "Update Note";
        confirmButton = "Update";
        cancelButton = (
          <Button
            onClick={cancel}
            variant="contained"
            size="large"
            color="primary"
          >
            Cancel
          </Button>
        );
        break;
      case "create":
        title = "Create Note";
        confirmButton = "Create";
        cancelButton = null;
        break;
      default:
        throw new Error("form case error");
    }
  };

  switchForm();
  const shouldEnable = () => !(noteBody && noteTitle);
  return (
    <Box p={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <TextField
            fullWidth
            placeholder="Title"
            type="text"
            inputProps={{
              maxLength: 10,
            }}
            variant="outlined"
            name="noteTitle"
            value={noteTitle}
            onInput={(e) => setNoteTitle(e.target.value)}
          />
          <Box mt={2}>
            <TextField
              label="Don't forget to..."
              multiline
              fullWidth
              inputProps={{
                maxLength: 90,
              }}
              rows={4}
              variant="outlined"
              name="noteBody"
              value={noteBody}
              onInput={(e) => setNoteBody(e.target.value)}
            />
          </Box>  
          <CardActions>
            <Button
              disabled={shouldEnable()}
              onClick={submitNote}
              variant="contained"
              size="large"
              color="primary"
            >
              {confirmButton}
            </Button>
            {cancelButton}
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Form;
