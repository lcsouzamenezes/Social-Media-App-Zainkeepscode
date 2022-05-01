import Home from "./pages/Home";
import "./App.css"
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Auth/> */}
        <Outlet/>
    </div>
  );
}

export default App;
