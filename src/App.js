import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import NewNoteForm from './componentes/NewNoteForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NewNoteForm />
      <Footer />
    </div>
  );
}

export default App;
