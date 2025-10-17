// import React from 'react'
// import Hooks from './component/Hooks'

// const App = () => {
//   return (
//     <div>
//       <Hooks />
//     </div>
//   )
// }

// export default App

//                                       //


// import React from 'react'
// import {BrowserRouter as Routers,Routes,Route,Link} from "react-router-dom"
// import Home from './component/RouterPage/Home'
// import Detail from './component/RouterPage/Detail'
// import ProductDetail from './component/RouterPage/ProductDetail'
// import ContactDetail from './component/RouterPage/ContactDetail'
// import Getid from './component/RouterPage/Getid'
// const App = () => {
//   return (
//     <div>



//     <Routers>
//     <nav>
//       <Link to='/home'>Home</Link>
//     </nav>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/getId/:id' element={<Getid/>}/>
//         <Route path='/detail' element={<Detail/>}>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         <Route path='contactDetail' element={<ContactDetail/>}/>
//         </Route>
//       </Routes>
//     </Routers>
//     </div>
//   )
// }

// export default App

//LAZY LOADED COMPONENT

// import React from 'react'
// import { lazy } from 'react'
// import { Suspense } from 'react'

// const Lazy = lazy(()=>import('./component/Hooks'))
// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<p>Loading..</p>}>
//         <Lazy/>
//       </Suspense>
//     </div>
//   )
// }

// export default App


//USE CONTEXT

// import React from 'react'
// import Hooks from './component/Hooks'

// const App = () => {
//   return (
//     <div>
//       {/* <GiveBorder/> */}

//       <Hooks/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { EnhancedOne } from './component/HOC/HOC'

const App = () => {
  return (
    <div>
      <EnhancedOne />
    </div>
  )
}

export default App
