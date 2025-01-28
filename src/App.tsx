import './App.css'
import { fullyIrregular } from './types/irregular_verbs'
function App() {

  const verbjson : any = fullyIrregular.map( (verb, index ) => ({ ...verb, id: index }) ) 

  return (
    <>
      
      { JSON.stringify( verbjson, null, 4) }
    </>
  )
}

export default App
