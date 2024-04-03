import { useState } from 'react';
import './App.css';
import getData from './api/getdata.js'
import SearchKey from './components/searchKey.jsx';
import { createBrowserHistory } from 'history';

function App() {
  const [arrResult, setArrResult] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [loading, setLoading] = useState(false)
  
  
  

  return (
    <div className='container'>
      <SearchKey arrResult={arrResult} searchKey={searchKey} setSearchKey={setSearchKey} getData={getData} loading={loading} setLoading={setLoading} setArrResult={setArrResult} createBrowserHistory={createBrowserHistory}/>
    </div>
  );
}

export default App;
