/*

import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Delete from './components/Delete'
import Update from './components/Update'

const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <Delete/>
      <Update/>
      <View/>
    </div>
  )
}

export default App;

*/

import React from 'react';
import Register from './components/Register';
import View from './components/View';
import Delete from './components/Delete';
import Update from './components/Update';
import './App.css'; // Make sure this is imported

const App = () => {
  return (
    <div className="container">
      <h1>User Registration System</h1>

      <div className="section">
        <h2>Register User</h2>
        <Register />
      </div>

      <div className="section">
        <h2>Update User</h2>
        <Update />
      </div>

      <div className="section">
        <h2>Delete Product</h2>
        <Delete />
      </div>

      <div className="section table-section">
        <h2>Registered Users List</h2>
        <View />
      </div>
    </div>
  );
};

export default App;

