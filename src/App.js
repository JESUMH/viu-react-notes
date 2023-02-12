import { Box } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NewNoteForm from './components/NewNoteForm';
import Note from './components/Note';
import useLocalStorage from './hooks/useLocalStorage';

/**
 * @function App
 * @description create main app component
 * @returns main App HTML
 */
function App() {
  
    /**
   * Custom hook to save all notes in localStorage
   */
  const [notes, setNotes] = useLocalStorage('notes', []);
  
  /**
   * @function addNote
   * @description Save new notes by onAdd event
   * @param {*} newNote 
   */
  function addNote(newNote) {
    setNotes(prevNotes=> {
      return [...prevNotes, newNote]
    })
  }

  /**
   * @function removeNote
   * @description Remove Note
   * @returns list updated with deleted item
   */
  function removeNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return id !== index;
      });
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
                  onDelete={removeNote}
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
