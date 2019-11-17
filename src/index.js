// import React from 'react'
// import ReactDOM from 'react-dom'
// import Title from '@components/title'

// console.log('process.env.TITLE', process.env.TITLE)
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, World.</h1>
//         <Title />
//       </div>
//     )
//   }
// }

// const mountApp = document.getElementById('app')
// ReactDOM.render(<App />, mountApp)
import React from 'react'
import ReactDOM from 'react-dom'

import App from '@components/App'
import Firebase, { FirebaseContext } from '@components/Firebase'

const apiKey = process.env.API_KEY
const authDomain = process.env.AUTH_DOMAIN
const databaseURL = process.env.DATABASE_URL
const projectId = process.env.PROJECT_ID
const storageBucket = process.env.STORAGE_BUCKET
const messagingSenderId = process.env.MESSAGING_SENDER_ID
const appId = process.env.APP_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

const firebase = Firebase(firebaseConfig)

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('app')
)

module.hot.accept()
