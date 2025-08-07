// import React from 'react'
// import UseState from './Component/UseState'
// import UseEffect from './Component/UseEffect'
// import UseRef from './Component/UseRef'
// import Basics from './Component/Basics'
// import Week2 from './Component/Week2'

// const App = () => {
//   return (
//     <div>
//       {/* <UseState/> */}
//       {/* <UseEffect/> */}
//       {/* <UseRef /> */}
//       {/* <Basics /> */}
//       <Week2/>
//     </div>
//   )
// }

// export default App


//usecontext

// import React from 'react'
// import Context from './useContext/Context'
// import No from './useContext/No'
// import Increment from './useContext/Increment'

// const App = () => {
//   return (
//     <Context>
//       <No/>
//       <Increment/>
//     </Context>
//   )
// }

// export default App


// import React, { lazy, Suspense } from 'react'

// const Lazy= lazy(()=>import('./Component/LazyComponent'))
// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<p>Loading</p>}>
//       <Lazy />
//       </Suspense>
//     </div>
//   )
// }

// export default App


import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './routers/HomePage'
import Contact from './routers/Contact'
import DetailPage from './routers/DetailPage'
import ProductDetail from './routers/ProductDetail'
import CustomerDetail from './routers/CustomerDetail'
import UseProductId from './routers/UseProductId'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact/>}/>

        <Route path='/detail' element={<DetailPage/>}>
        <Route path="productDetail" element={<ProductDetail/>}/>
        <Route path="customerDetail" element={<CustomerDetail/>}/>
        </Route>

        <Route path="/product/:productId" element={<UseProductId/>}/>
      </Routes>
    </Router>
  )
}

export default App
