import Form from "./components/Form/Form";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      Hola, bienvenido, sabemos que quieres viajar en un Avion,
       por favor diligencia el siguiente formulario:
      <Form></Form>
    </div>
  );
}

export default App;
