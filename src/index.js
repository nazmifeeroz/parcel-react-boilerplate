import React from 'react'
import ReactDOM from 'react-dom'
import Title from '_components/title'

console.log('process.env.TITLE', process.env.TITLE)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World.</h1>
        <Title />
      </div>
    )
  }
}

const mountApp = document.getElementById('app')
ReactDOM.render(<App />, mountApp)
