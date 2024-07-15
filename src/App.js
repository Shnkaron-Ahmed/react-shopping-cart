import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './pages/404';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Form from './pages/Form';
import './Styles.css';

// Define the App component which uses React Router to navigate between pages.

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    Home
                </Route>
                <Route path="/about" element={<About />}>
                    About
                </Route>
                <Route path="/contact" element={<Contact />}>
                    About
                </Route>
                <Route path="/Form" element={<Form />}>
                    Form
                </Route>
                <Route path="/cart" element={<Cart />}>
                    Cart
                </Route>
              
                <Route path=":productId" element={<Cart />}>
                    Cart
                </Route>
                <Route path="/*" element={<NotFound />}>
                    Not Found
                </Route>
            </Routes>

            <Footer />
          
        </div >
    );
}

export default App;
