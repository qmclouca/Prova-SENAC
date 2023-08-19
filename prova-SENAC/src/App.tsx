import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import PageCards from './Components/PageCards/PageCards';
import GitHubUser from './Components/GitHubUsersProps/GitHubUser';
const App = () => {
  return (
    <BrowserRouter>      
          <Routes>
            <Route path="/" element={<PageCards />}>
              <h1>teste base</h1>
              <PageCards></PageCards>
            </Route>
            <Route path="/github-user">
              <h1>teste git</h1>
              <GitHubUser username="qmclouca" />
            </Route>            
          </Routes>           
    </BrowserRouter>
      
  )
}

export default App
