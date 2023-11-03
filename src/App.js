import logo from './logo.svg';
import './App.css';
import './components/fileStyles.css';
import FileExplorer from './components/FileExplorer.tsx';


function App() {
  return (
    <div className="App">
      <h3>File Explorer</h3>
      <FileExplorer />
    </div>
  );
}

export default App;
