import React from 'react'
import Basics from './Practice/basics'
// import UseEffect from './hooks/UseEffect'
// import UseStateAndUseEffectRecheck from './hooks/UseStateAndUseEffectRecheck'
// import UseState from './hooks/UseState'
// import UseRef from './hooks/UseRef'
// import Basics from './hooks/Basics'

const App = () => {
  return (
    <div>
      {/* <UseState/> */}
      {/* <UseEffect /> */}
      {/* <UseStateAndUseEffectRecheck /> */}
      {/* <UseRef/> */}
      {/* <Basics /> */}
      <Basics/>
    </div>
  )
}

export default App

// Router related App.jsx

// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import Home from "./hooks/routerHooks/Home";
// import Contact from "./hooks/routerHooks/Contact";
// import Details from "./hooks/routerHooks/details";
// import OrderDetails from "./hooks/routerHooks/orderDetails";
// import SlotDetails from "./hooks/routerHooks/slotDetails";
// import UserDetail from "./hooks/routerHooks/UserDetail";
// import { lazy, Suspense } from "react";

// const LazyComponent = lazy(()=>import("./hooks/routerHooks/LazyLoad"))
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* common route */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* nested route */}
//         <Route path="/details" element={<Details />}>
//           <Route path="orderDetails" element={<OrderDetails />} />
//           <Route path="slotDetails" element={<SlotDetails />} />
//         </Route>
//         {/* dynamicRoute */}

//         <Route path="/user/:userId" element={<UserDetail />} />

//         {/* Navigate for redirect */}
//         <Route path="/" element={<Navigate to="/contact"/>}/>

//         {/* lazy */}
//         <Route path="/lazy" element={
//           <Suspense fallback={<p>Loading..</p>}>
//             <LazyComponent/>
//           </Suspense>}/>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
