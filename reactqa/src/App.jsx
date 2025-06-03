// import React from 'react'
// import Count from './Component/Count'

// const App = () => {
//   return (
//     <div>
//       <Count/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ContextCreation from './useContext/ContextCreation'
// import Button from './useContext/Button'
// import Input from './useContext/Input'

// const App = () => {
//   return (
//     <ContextCreation>
//       <Input/>
//       <Button/>
//     </ContextCreation>
//   )
// }

// export default App

import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Details from './Component/Details'
import ContactDetails from './Component/ContactDetails'
import MentorDetails from './Component/MentorDetails'
import Order from './Component/Order'

const App = () => {
  
  return (
    <BrowserRouter>
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/details' element={<Details/>}>
          <Route path='contactDetails' element={<ContactDetails/>}/>
          <Route path='mentorDetails' element={<MentorDetails/>}/>
        </Route>
          <Route path='/order/:orderId' element={<Order/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
