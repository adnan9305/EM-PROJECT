import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './components/Navbar';
import EmpolyeeList from './components/EmpolyeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route index element={ <EmpolyeeList/> } />
    <Route path="/" element={ <EmpolyeeList/> } />
    <Route path="/addEmployee" element={ <AddEmployee/> } />
    <Route path="/editEmployee/:id" element={ <UpdateEmployee/> } />
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
