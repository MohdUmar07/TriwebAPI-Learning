import FirstComponent from "./components/FirstComponent";
import BackDrop from "./components/BackDrop";
import { useState } from "react";

function App() {
  
  const [modalOpen, setModalOpen] = useState(false);

  const modalCloseHandler = () =>{
    setModalOpen(false);
  }

  const modalOpenHandler = () =>{
    setModalOpen(true);
  }

  return (
    <div>
      <h1>Hello! this is my page.</h1>
      <h4>Click on button to open the Modal</h4>
      {modalOpen?<FirstComponent owner="Anas" reason="For Demo" closeModal={modalCloseHandler} />:null}
      {modalOpen?<BackDrop anas="Anas" />:null}
      <button onClick={modalOpenHandler}>Open</button>
      
    </div>
  );
}

export default App;
