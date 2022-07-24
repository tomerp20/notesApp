import Modal from '@mui/material/Modal';
import Form from "./Form.jsx";
import { Box } from '@mui/material';
const NoteModal = (props) => {
  const { updateNote, closeModal, note, noteIndex } = props;

  const updateModal = (newNote) => {
    updateNote(noteIndex, newNote);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={true}
      onClose={() => closeModal()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <Box sx={style}>
      <Form
        createNote={updateModal}
        note={note}
        cancel={() => {
          closeModal();
        }}
        type={"update"}
      ></Form>
      </Box>
    </Modal>
  );
};

export default NoteModal;
