import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignInPage from '@components/SignIn'

const App = () => {
  return (
    <Router>
      <div>
        <hr />
        <Route exact path="/" component={SignInPage} />
      </div>
    </Router>
  )
}

export default App
