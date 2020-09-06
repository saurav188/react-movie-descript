import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavigationBar';
import HomeView from './views/Home';
import SearchView from './views/SearchView'
import MovieDescriptionView from './views/MovieDescriptionView';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <Switch>
          <Route path='/' exact component={HomeView}></Route>
          <Route path='/Search/keyword=:keywords/page=:pg_no' exact component={SearchView}></Route>
          <Route path='/movie_description/:id' component={MovieDescriptionView}></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
