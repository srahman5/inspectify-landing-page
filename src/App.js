import { useState } from 'react';
import './App.css';
import Header from './Header.js'
import Banner from './Banner.js'
import CreateOrder from './CreateOrder.js'
import Footer from './Footer.js'
import Modal from './Modal.js'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <Banner />
      <CreateOrder onSetShow={setShowModal} />
      <Footer />
      <Modal show={showModal} onSetShow={setShowModal}/>
    </div>
  );
}

export default App;
