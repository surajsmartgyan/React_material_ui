import * as React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Practice1 from './Practice1';

function App() {
  return (
<>
<Router>
<Routes>
  <Route path='/' element={<Practice1 />}/>
</Routes>
</Router>
</> 
 );
}

export default App;
