// import React from 'react'
// import All from './component/All'
// import {BrowserRouter,Routers,Routes,Route} from 'react-router-dom'
// const App = () => {
//   return (


//     // <div>
//     //   <All/>
//     // </div>
//   )
// }

// export default App


// import React, { lazy, Suspense } from 'react'
// import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
// import All from './component/All'
// import Details from './component/Details'
// import Contact from './component/Contact'
// import Product from './component/Product'
// import Para from './component/Para'
// // import LazyComponent from './component/LazyComponent'

// const LazyComponent = lazy(()=>import('./component/LazyComponent'))

// const App = () => {
//   return (
//     <BrowserRouter>

//     <nav>
//     <Link to="/home">home</Link>
//     </nav>
//       <Routes>
//         <Route path="/home" element={<All/>}></Route>

//         <Route path='/details' element={<Details/>}>
//         <Route path='contact' element={<Contact/>}></Route>
//         <Route path='product' element={<Product/>}></Route>
//         </Route>

//         <Route path='/basha/:id' element={<Para />}></Route>

//         <Route path='/lazy' element={<Suspense fallback={<p>Loading</p>}> <LazyComponent/> </Suspense>}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import Creation from './context/Creation'
// import Button from './context/Button'
// import Input from './context/Input'

// const App = () => {
//   return (

//       <Creation>
        
//         <Input/>
//         <Button/>

//       </Creation>
  
//   )
// }

// export default App


import React from 'react'
import Remaining from './component/Remaining'

const App = () => {

  return (
    <div>
      <Remaining />
    </div>
  )
}

export default App
