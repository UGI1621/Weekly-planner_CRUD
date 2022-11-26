import './App.css';
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from './pages/Main'
import Plan from './pages/Plan'
import weekly from './data/weekPlan.json'

function App() {

  const [name , setName] = useState('')

  const ChangeName = (name)=>{
    setName(name)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main ChangeUserName={ChangeName} />}/>
        <Route path='/plan' element={<Plan name={name} />}/>
      </Routes>
    </div>
  );
}

export default App;
