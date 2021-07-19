import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <Dictionary />
      </main>

      <footer className="App-footer">
        <a href="https://github.com/alexnoelle07/dictionary">Open Source</a> and coded by Alex Noelle
      </footer>
      </div>
    </div>
  );
}

export default App;
