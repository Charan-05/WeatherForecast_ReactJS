import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Weather from './Weather'


function App() {
  return (
    <div className='app-container'>
        <h2 className='app-heading'>Welcome to the Weather Forecast Department</h2>
        <Weather/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App