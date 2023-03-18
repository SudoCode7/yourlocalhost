import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route , Routes} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<Home/>}/>
        <Route  path ='/:filename' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
