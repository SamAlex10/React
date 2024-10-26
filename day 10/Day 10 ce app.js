App.jsx
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
import About from './About';
import Contact from './Contact';
import RegistrationForm from './RegistrationForm';
import SubmittedForm from './SubmittedForm';
import Navbar from './Navbar';
const App = () => {
 return (
 <div className='App'>
 <BrowserRouter>
 <Navbar />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/destionation' element={<Destination />} />
 <Route path='/about' element={<About />} />
 <Route path='/contact' element={<Contact />} />
 <Route path='/registration' element={<RegistrationForm />} />
 <Route path='/submittedform' element={<SubmittedForm />} />
 </Routes>
 </BrowserRouter>
 </div>
 )
}
export default App;
