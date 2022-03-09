import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className='container'> 
      <Dictionary defaultWord="animals"/>
      <footer>
        <small>
          Dictionary app was built by Elina Kostiainen and is {""}
          <a href="https://github.com/elinakostiainen/dictionary-react-project" target="_blank" rel="noreferrer">open-source</a>.
        </small>
      </footer>
      </div>
    </div>
  );
}

