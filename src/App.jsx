import { Route, Routes ,BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx'
import Landing from "./components/Home/landing.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1800,
      // Animation duration in milliseconds
      // once: true,
      // Whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <div className='font-inter'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>



    </div>


  )
}

export default App
