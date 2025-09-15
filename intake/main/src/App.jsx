import React from 'react'
import Counter from './components/counter'
// import About from './components/About'
// import Value from './components/Value'
// import Increment from './components/Increment'
const App = () => {
  return (
    <div>
      <Counter/>
      {/* <About/> */}

{/* useContext and contextAPI */}
      {/* <Counter>
        <Value/>
        <Increment/>
      </Counter> */}
    </div>
  )
}

export default App



// router

// import React from 'react'
// import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
// import About from './components/About'
// import Counter from './components/counter'
// import Detail from './components/Detail'
// import ProductDetail from './components/ProductDetail'
// import CustomerDetail from './components/CustomerDetail'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to="/about">About</Link> | 
//       <Link to="/">Home</Link>
//     </nav>
//       <Routes>
//         <Route path="/" element={<Counter/>}/>
//         <Route path="/about" element={<About/>}/>

//         <Route path="/details" element={<Detail/>}>
//         <Route path="productDetail/:productId" element={<ProductDetail/>}/>
//         <Route path="customerDetail/:customerId" element={<CustomerDetail/>}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import Counter from './components/counter'
// import Input from './components/Input'
// import Button from './components/Button'

// const App = () => {

//   return (
//     <Counter>
//       <Input/>
//       <Button/>
//     </Counter>
//   )
// }

// export default App
