import { Box, Grid } from  "@mui/material";
import Note from "./Note";

const Notelist = (props) => {
  const { notes, deleteNote, modifyNote } = props;
  return (
    <>
      {notes.length > 0 && (
        <Box p={3}>
          <Grid item container spacing={4}>
            {notes.map((note, index) => {
              return (
                <Note
                  key={note.id}
                  index={index}
                  note={note}
                  modifyNote={modifyNote}
                  deleteNote={deleteNote}
                />
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Notelist;
