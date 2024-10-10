import './App.css';
import { Header } from './components/Header/Header';
import { Slogan } from './components/Slogan/Slogan';
import { Services } from './components/Services/Services'; 
import { PossibleInfo } from './components/PossibleInfo/PossibleInfo'; 
import { Contact } from './components/Contact/Contact'; 

function App() {

  return (
    <>
      <Header/>
      <Slogan/>
      <Services/>
      <PossibleInfo/>
      <Contact/>
    </>
  )
}

export default App;
