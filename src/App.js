/*
  App JS 

*/

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ImageSlider from './components/image-slider/ImageSlider';
import LoginRegister from './components/login-register/LoginRegister';

const slidesArray = [
  {url: 'https://media.admagazine.com/photos/61de539e089751617cd2fc74/16:9/w_2560%2Cc_limit/plantas.jpg', title: 'Plants'},
  {url: 'https://estaticos-cdn.prensaiberica.es/clip/d0fad945-7822-4c52-8820-d2f5487078cd_16-9-discover-aspect-ratio_default_0.jpg', title: 'Leaves'},
  {url: 'https://www.clara.es/medio/2022/03/16/plantas-de-interior-bonitas_ad98ca6d_1280x720.jpg', title: 'Cactus'},
  {url: 'https://quinto-poder.mx/u/fotografias/m/2022/9/28/f608x342-26452_56175_17.jpg', title: 'CactusBonito'},
  {url: 'https://s1.eestatic.com/2021/03/22/actualidad/567954346_176146463_1706x960.jpg', title: 'Pots'},
];

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
