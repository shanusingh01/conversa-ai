import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { MyContext } from './MyContext';
import './App.css'

function App() {
  const providerValues = {}; //passing values

  return (
    <div className='app'>
      <MyContext.Provider values={providerValues}>
        <Sidebar/>
        <ChatWindow/>
      </MyContext.Provider>
      
    </div>
  )
}

export default App
