import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import NavBarComp from './NavBarComp'
import HomeComp from "./HomeComp"
import BuyComp from "./BuyComp"
import SellComp from "./SellComp"

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Router>
      <NavBarComp/>
         <Routes>
           <Route exact path="/" element={<HomeComp/>}/>
           <Route path="/buy" element={<BuyComp/>}/>
           <Route path="/sell" element={<SellComp/>}/>
         </Routes>
      </Router>

      {/* {show && (
       <Alert variant='danger' onClose={() => setShow(false)} dismissible>
        Home
       </Alert>
      )} */}
    </div>
  )
}

export default App
