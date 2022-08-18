import './App.css';
import imagen from './im.jpg';

function App() {
  return (
    <div className="App">
      <h1>Hellooo</h1>
      <p>Alta app debería tener acá pero de pedo se poner una imagen con React</p>
      <button>Clic aquí</button>
      <button>Clic aquí</button>
      <button>Clic aquí</button>
      <button>Clic aquí</button>
      <br></br>
      <img src={imagen} alt='universe'/>
    </div>
  );
}

export default App;
