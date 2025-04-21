import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/cake/store'
import Cake from './Component/Cake'
import Cakes from './Component/Cakes'
const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Cake cake/>
      {/* <Cakes /> */}
    </div>
    </Provider>

  )
}

export default App
