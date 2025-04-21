// import React from 'react'
// import Count from './Components/count'
// import UseEffect from './Components/useEffect'
// import UseRef from './Components/UseRef'

// const App = () => {
//   return (
//     <div>
//       {/* <Count/> */}
//       {/* <UseEffect/> */}
//       <UseRef />
//     </div>
//   )
// }

// export default App

//Router related over
// import React from 'react'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Home from './Component1/home'
// import About from './Component1/about'
// import Details from './Component1/details'
// import Contact from './Component1/Contact'
// import ProductDetails from './Component1/ProductDetails'
// import User from './Component1/User'
// const App = () => {
//   return (
//     <BrowserRouter>

//     <nav>
//       <Link to="/home">Home</Link>
//       <Link to='/about'>About</Link>
//     </nav>
//     <Routes>
//       <Route path='/home' element={<Home/>}></Route>
//       <Route path='/about' element={<About/>}></Route>
//       <Route path='/details' element={<Details/>}>
//       <Route path='Contact' element={<Contact/>}></Route>
//       <Route path='Product' element={<ProductDetails/>}></Route>
//       </Route>
//       <Route path='/user/:id' element={<User/>}></Route>
//     </Routes>  
//     </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import UseMemo from './week2/UseMemo'
// import UseCallback from './week2/UseCallback'
// import ReactMemo from './week2/ReactMemo'
// import UseReducer from './week2/UseReducer'

// import CreateContextProvider from './week2/contextapi/CreateContext'
// import ShowNo from './week2/contextapi/ShowNo'
// const App = () => {
//   return (
//     // <div>
//     //   {/* <UseMemo /> */}
//     //   {/* <UseCallback /> */}
//     //   {/* <ReactMemo/> */}

//     //   {/* <UseReducer /> */}
//     // </div>

//     <CreateContextProvider>
//       <ShowNo />
//     </CreateContextProvider>
//   )
// }

// export default App


import React from 'react'
import CreateContextProvider from './week2/contextapi/CreateContext'
import ShowNo from './week2/contextapi/ShowNo'
import Incre from './week2/contextapi/Incre'

const App = () => {
  return (
    <CreateContextProvider>
      <ShowNo/>
      <Incre/>
    </CreateContextProvider>
  )
}

export default App
