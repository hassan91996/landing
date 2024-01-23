import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact/contact';
import Header from './Components/Header/header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/footer';
import About from './Components/About/about';
import Services from './Components/Services/Services';
import Whyus from './Components/Whyus/Whyus';



function App() {
  return (
    <div className="App">
        <Header />
        <Home/>
        <About/>
        <Services/>
        <Whyus/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
