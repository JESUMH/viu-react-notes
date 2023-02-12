import { Add } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Fab, TextField } from "@mui/material";
import { useState } from "react";

/**
 * @function NewNoteForm
 * @param {} props 
 * @returns new note form HTML
 */
export default function NewNoteForm(props) {

  /**
   * Hook to save current state note
   */
  const [note, setNote] = useState({
    title: "",
    content: "",
  }) 

  /**
   * @function submitNote
   * @description Save note on app component state through props 
   */
  function submitNote(event) {
    props.onAdd(note)
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  }

  /**
   * @function handleChange
   * @description Detect note changes
   * @param {*} event 
   */
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote, 
        [name]: value
      }
    });
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: 2
    }}>
      <Card sx={{ width: '100%', maxWidth: 480 }}>
        <CardContent>
          <form>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <TextField
                id="title"
                label="Crear una nota"
                name="title"
                variant="filled"
                onChange={handleChange}
                value={note.title}
              />

              <TextField 
                id="content"
                name="content"
                label="Contenido"
                variant="filled"
                multiline
                rows={3}
                onChange={handleChange}
                value={note.content}
              />
            </Box>
          </form>
        </CardContent>
        <CardActions sx={{ display:'flex', justifyContent:'flex-end' }}>
          <Fab size="small">
            <Add onClick={submitNote} />
          </Fab>
        </CardActions>
      </Card>
    </Box>
  );
}