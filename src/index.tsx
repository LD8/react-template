import ReactDOM from 'react-dom'
import React from 'react'
import './global.less'
import './app.less'

const App: React.FC = () => {
  return (
    <div id='app'>
      <header>
        <h1>A template for react app</h1>
      </header>
      <main>
        <h3>Built with ❤️</h3>
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
