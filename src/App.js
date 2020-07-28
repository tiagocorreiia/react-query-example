import React, { useState, Fragment } from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'

import NavBar from './components/NavBar'
import People from './components/People'
import Planets from './components/Planets'

function App() {
  const [page, setPage] = useState('planets')
  return (
    <Fragment>
      <div className='App'>
        <h1>Star Wars Info</h1>
        <NavBar setPage={setPage} />
        <div className='content'>
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </Fragment>
  )
}

export default App
