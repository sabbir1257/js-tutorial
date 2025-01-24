import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  /* useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[]) */
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/sabbir1257/watches-data/refs/heads/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  /* const watches = [
    { id: 1, name: 'Apple watch', price: 100 },
    { id: 2, name: 'Samsung watch', price: 200 },
    { id: 3, name: 'Mi watch', price: 300 },
  ] */

    /* const watches = [
      { id: 1, name: "Apple Watch Series 9", price: 399.99 },
      { id: 2, name: "Samsung Galaxy Watch 6", price: 349.99 },
      { id: 3, name: "Garmin Venu 2 Plus", price: 449.99 },
      { id: 4, name: "Fitbit Sense 2", price: 299.95 },
      { id: 5, name: "Amazfit GTR 4", price: 199.99 }
    ]; */
    

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch watch={watch} key={watch.id}></Watch>)
      }
    </>
  )
}

export default App
