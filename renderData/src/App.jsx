import './App.css'
import HigherOrderComponent from './components/HigherOrderComponent'


function App() {


  return (
    <>
      <HigherOrderComponent type="Designer" firstLetter="J" maxAge={50} minAge={28}/>
    </>
  )
}

export default App
