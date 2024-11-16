import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Task2:Create the App Component
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: '1', price: 10, description: '1' },
    { id: 2, name: '2', price: 15, description: '2' },
    { id: 3, name: '3', price: 20, description: '3' },])
}

export default App;
