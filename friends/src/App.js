import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/LoginForm';
import FriendListView from './views/FriendListView';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/api/login'>Login</Link>
          </li>
          <li>
            <Link to='/api/friends'>Private Friend List</Link>
          </li>
        </ul>
        <Route path='/api/login' component={Login} />
        <PrivateRoute exact path='/api/friends' component={FriendListView} />
      </div>
    </Router>
  );
}

export default App;
