import React, { useEffect, useState } from 'react';
import './App.css';
import Add from './Add'
import List from './List'


function App() {
 
  return (
  
     <div className="App">
       <div className="app_bodyp">
         <Add></Add>
       <List></List>
      </div>
       
    </div>
  );
}

export default App;
