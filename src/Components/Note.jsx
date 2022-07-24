import {
    Button,
    Card,
    CardActions,
    Grid,
    Typography,
    CardContent,
  } from  "@mui/material"
  import { convertDate } from "../helpers/utils";
  
  const Note = ({
    index : noteIndex,
    note: { body, createdAt, title, isArchived, shouldRemind, reminderDay, id },
    modifyNote,
    deleteNote,
  }) => {
    const archiveText = () => (isArchived ? "Unarchive" : "Archive");

    return (
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Card>
          <CardContent>
            <Typography
              color="textPrimary"
              variant="h4"
              component="h1"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
              component="h2"
              gutterBottom
            >
              {body}
            </Typography>
            <Typography
              color="textSecondary"
              variant="h6"
              component="h2"
              gutterBottom
            >
             {convertDate(createdAt)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                deleteNote(noteIndex);
              }}
              variant="contained"
            >
              Delete
            </Button>
            <Button onClick={() => modifyNote(noteIndex)} variant="contained">
              Modify
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };
  
  export default Note;
  