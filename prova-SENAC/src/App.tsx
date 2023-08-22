import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageCards from './Pages/CardDisplay/PageCards';
import PageAutor from './Pages/AutorInfos/PageAutor';
import AdminPage from './Pages/AdminPage/AdminPage';
const App = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<PageCards />}/>        
        <Route path="/autor" element={<PageAutor/>}/>
        <Route path="/admin" element={<AdminPage/>}/>          
      </Routes>           
    </Router>      
  )
}

export default App
