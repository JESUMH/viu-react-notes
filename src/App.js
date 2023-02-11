import { useState } from 'react';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import NewNoteForm from './componentes/NewNoteForm';

function App() {
  
    /**
   * Hook to save all notes
   */
  const [notes, setNotes] = useState([]);
  
  /**
   * Save new notes by onAdd event
   * @param {*} newNote 
   */
  function addNote(newNote) {
    setNotes(prevNotes=> {
      return [...prevNotes, newNote]
    })

    console.log(notes);
  }
  
  return (
    <div className="App">
      <Header />
      <NewNoteForm 
        onAdd={addNote}
      />
      <Footer />
    </div>
  );
}

export default App;
