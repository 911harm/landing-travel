import React from 'react'
// import Form from "./components/Form/Form";
import SForm from './components/Form/SForm';
import Message from './components/Message';
import Navbar from "./components/Nav/Navbar";
import Provider from './components/Provider';


function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar></Navbar>
        <Message></Message>
      </Provider>
      {/* <Form></Form> */}
      <SForm></SForm>
    </div>
  );
}

export default App;
