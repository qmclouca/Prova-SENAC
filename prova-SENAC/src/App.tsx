import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageCards from './Components/PageCards/PageCards';
import GitHubUser from './Components/GitHubUsersProps/GitHubUser';
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/github-user">
            <h1>teste git</h1>
            <GitHubUser username="qmclouca" />
          </Route>
          <Route path="/" element={<PageCards/>}>
            <h1>teste base</h1>
            <PageCards></PageCards>
          </Route>
        </Routes>     
    </Router>   
  )
}

export default App
