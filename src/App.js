import { Box } from '@mui/material';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import NewNoteForm from './componentes/NewNoteForm';
import Note from './componentes/Note';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  
    /**
   * Custom hook to save all notes in localStorage
   */
  const [notes, setNotes] = useLocalStorage('notes', []);
  
  /**
   * Save new notes by onAdd event
   * @param {*} newNote 
   */
  function addNote(newNote) {
    setNotes(prevNotes=> {
      return [...prevNotes, newNote]
    })
  }
  
  return (
    <div className="App">
      <Header />
      <NewNoteForm 
        onAdd={addNote}
      />
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2, mb: 6}}>
        {
          notes.map(
            (note, index) => {
              return ( 
                <Note
                  key={index}
                  id={index}
                  title={note.tile}
                  content={note.content}
                  />
              ); 
            }
          )
        }
      </Box>
      <Footer />
    </div>
  );
}

export default App;
