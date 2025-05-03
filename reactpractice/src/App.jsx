import React, { lazy, Suspense } from 'react'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import ReactMemo from './Hooks/ReactMemo'
import UseCallback from './Hooks/UseCallback'
import UseReducer from './Hooks/UseReducer'
import CreateContext from './Hooks/Context/CreateContext'
import Checkbox from './Hooks/Context/Checkbox'
import Button from './Hooks/Context/button'
import ParentToChild from './Hooks/ParentToChild'
import ChildToParent from './Hooks/ChildToParent'
import ForwardRef from './Hooks/ForwardRef'
import MainComponent from './Hooks/Lazy/mainComponent'

import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Hooks/Router/Home'
import Home1 from './Hooks/NestedRouter/Home1'
import About1 from './Hooks/NestedRouter/About1'
import Contact1 from './Hooks/NestedRouter/Contact1'
import User1 from './Hooks/NestedRouter/User1'

const Contact = lazy(()=>import('./Hooks/Router/Contact'))

const App = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseEffect/> */}
      {/* <UseRef /> */}
      {/* <UseMemo/> */}
      {/* <ReactMemo/> */}
      {/* <UseCallback/> */}
      {/* <UseReducer /> */}

{/* context example */}
      {/* <CreateContext>
        <Checkbox/>
        <Button/>
      </CreateContext> */}

      {/* <ParentToChild /> */}

      {/* <ChildToParent/> */}

      {/* <ForwardRef/> */}

      {/* <MainComponent /> */}


{/* Route related */}
{/* <BrowserRouter>
<nav>
  <Link to="/home">Home</Link>
  <Link to="/contact">Contact</Link>
</nav>
<Suspense fallback={<p>Loading</p>}>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes>
</Suspense>
</BrowserRouter> */}

{/* NestedRoute */}

<BrowserRouter>
<Routes>
  <Route path="/home" element={<Home1/>}>
  <Route path="about" element={<About1/>}></Route>
  <Route path="contact" element={<Contact1/>}></Route>
  </Route>

  <Route path='/user/:id' element={<User1/>}></Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
