import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import { useEffect } from 'react';

import 'animate.css';
import 'wowjs/css/libs/animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Policy from './Pages/Policy';
import NotFoundPage from './Pages/NotFound';


function App() {
  useEffect(() => {
    const WOW = require('wowjs');
    const wow = new WOW.WOW({
      boxClass: 'wow', // Class name to apply to the element when it becomes visible
      animateClass: 'animated', // Class name to apply to the animated elements
      offset: 0, // Distance from the element to trigger the animation
      mobile: true, // Whether to enable animation on mobile devices
      live: false // Whether to update animations on DOM changes (e.g., AJAX)
    });
    wow.init();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/policy" exact element={<Policy />} />
          <Route path="/" exact element={<Landing />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
