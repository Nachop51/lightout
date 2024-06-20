import './App.css'
import NavBar from './NavBar'
import Requester from './Requester'
import RequestList from './RequestList'

function App () {
  return (
    <div className='app-layout'>
      <NavBar />
      <RequestList />
      <Requester />
    </div>
  )
}

export default App
