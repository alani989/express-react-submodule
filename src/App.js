import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {

  const [welcome, setWelcome] = useState('')

  useEffect(() => {
    httpGet()
  },[])

  const httpGet = () => {
    axios.get('/api/greeting')
    .then(res => {
      const { data } = res
      setWelcome(data.greeting)
    }).catch(err => {
      console.log('err', err)
      setWelcome('There was an error, please try again later or contact your admin')
    })
  }
  
  return (
    <div className="App">
      <h1>{welcome}</h1>
    </div>
  );
}

export default App;
