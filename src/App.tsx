
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from 'ui'
import { SIGNIN } from './routes'
import { SignIn } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGNIN} element={<SignIn />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App