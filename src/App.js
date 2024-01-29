
import './App.css';
import Descripcion from './Descripcion';
import Mensaje from './Mensaje';




const App = () => {
  const msj = 'hola unix';
  return (
    <div className="App">
      <Mensaje color='red' text='hola, '/>
      <Mensaje color='black' text='bienvenidos'/>
      <Mensaje color='green' text='comunidad'/>
      <Mensaje color='orange' text='al desarrollo'/>
      <br/>
      {msj + ': iniciando un sistema'}
      <br/>
      <Descripcion/>
    </div>
  );
}

export default App;
