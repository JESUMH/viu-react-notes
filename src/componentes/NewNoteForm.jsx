import { Add } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Fab, TextField } from "@mui/material";

export default function NewNoteForm() {
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
              />

              <TextField 
                id="content"
                name="content"
                label="Contenido"
                variant="filled"
                multiline
                rows={3}
              />
            </Box>
          </form>
        </CardContent>
        <CardActions sx={{ display:'flex', justifyContent:'flex-end' }}>
          <Fab size="small">
            <Add />
          </Fab>
        </CardActions>
      </Card>
    </Box>
  );
}