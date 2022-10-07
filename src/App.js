/*
  App JS 

*/

import './App.css';
import Register from './components/text-input-component/TextInput.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Footer />
      
    </div>
  );
}

export default App;
