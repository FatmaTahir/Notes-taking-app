import React ,{useState} from 'react'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import SavedNotes from './components/SavedNotes.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const[notes,setNotes] = useState([]);
  return (
     <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main notes={notes} setNotes={setNotes}/>}/>
        <Route path="/saved-notes" element={<SavedNotes  notes={notes} setNotes={setNotes}/>}/>
      </Routes>
      {/* <Main/> */}
     </Router>
    
  )
}

export default App