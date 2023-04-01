

import './App.css';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/add' element={
      <Add data={{id:'',name:'',brand:'',quantity:'',price:''}} method="post"/>}/>

    </Routes>

    </div>
  );
}

export default App;