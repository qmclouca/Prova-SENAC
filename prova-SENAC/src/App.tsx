import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageCards from './Pages/CardDisplay/PageCards';
import PageAutor from './Pages/AutorInfos/PageAutor';
const App = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<PageCards />}/>        
        <Route path="/autor" element={<PageAutor/>}/>          
      </Routes>           
    </Router>      
  )
}

export default App
