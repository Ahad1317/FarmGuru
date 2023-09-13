import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route, Routes} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Shelf from './components/Shelf';
import Scientists from './components/Sidebar';
import Footer from './components/Footer';
import Bookings from './components/Bookings'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/"Component={Home} />
    <Route exact path="/login"Component={Login} />
    <Route exact path="/register"Component={Register} />
    <Route exact path="/logout"Component={Logout} />
    <Route exact path="/shelf"Component={Shelf}/>
    <Route exact path="/scientists"Component={Scientists}/>
    <Route exact path="/bookings"Component={Bookings}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
