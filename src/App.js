import { useState } from 'react';
import './App.css';
import getData from './api/getdata.js'
import SearchKey from './components/searchKey.jsx';
import ListCard from './components/listCard.jsx';

function App() {
  const [arrResult, setArrResult] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div className='container'>
      <SearchKey searchKey={searchKey} setSearchKey={setSearchKey} getData={getData} loading={loading} setLoading={setLoading} setArrResult={setArrResult}/>
      <div className='App'>
        <ListCard arrResult={arrResult}/>
      </div>
    </div>
  );
}

export default App;
