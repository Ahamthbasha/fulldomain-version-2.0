import React,{Suspense} from 'react'

const LazyComponent = React.lazy(()=>import('./LazyComponent'))

const MainComponent = () => {

  return (
    <div>
        <Suspense fallback={<p>Loading</p>}>
        <LazyComponent />    
        </Suspense>      
    </div>
  )
}

export default MainComponent
