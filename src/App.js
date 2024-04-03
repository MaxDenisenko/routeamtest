import { useState } from 'react';
import './App.css';
import getData from './api/getdata.js'
import SearchKey from './components/searchKey.jsx';

import Pagination from './components/pagination.jsx';

function App() {
  const [arrResult, setArrResult] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [loading, setLoading] = useState(false)
  

  return (
    <div className='container'>
      <SearchKey searchKey={searchKey} setSearchKey={setSearchKey} getData={getData} loading={loading} setLoading={setLoading} setArrResult={setArrResult}/>
      <div>
        <Pagination arrResult={arrResult} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
