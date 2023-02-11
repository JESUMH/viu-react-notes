import { useState } from 'react';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import NewNoteForm from './componentes/NewNoteForm';
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
      <Footer />
    </div>
  );
}

export default App;
