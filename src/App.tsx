import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Services from './components/Services';
import Ebook from "./components/Ebook";

const App = () => {


  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/ebook' element={<Ebook />} />
      </Routes>
  )
}

export default App;