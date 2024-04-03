import { useEffect, useState } from "react";
import React from "react";
import qs from 'qs';
import Pagination from './pagination.jsx';

const SearchKey = ({ arrResult, searchKey, setSearchKey, getData, loading, setLoading, setArrResult, createBrowserHistory }) => {
    const history = createBrowserHistory()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const key = history.location.search.substring(1)
        const filterKey = qs.parse(key)
        console.log(filterKey);
        if (filterKey.search) {
            setSearchKey(filterKey.search)
            setCurrentPage(filterKey.currentPage)
            LoadData(filterKey.search)
        }
    }, [])

    useEffect(() => {
        if (searchKey.length === 0) {
            history.push()
        } else {
            history.push(`?search=${searchKey}&currentPage=${currentPage}`)
        }

    }, [searchKey, currentPage])


    async function LoadData(searchKey) {
        setLoading(true)
        await getData(searchKey).then(data => saveData(data.items))
    }

    function saveData(result) {
        setArrResult(result)
        setLoading(false)
    }

    return <>

        <input placeholder="Начните вводить текст для поиска (не менее трех символов)" value={searchKey} onChange={event => setSearchKey(event.target.value)} />
        <button onClick={() => LoadData(searchKey)} disabled={searchKey.length < 3 ? true : false }>Поиск</button>
        <div>
            <Pagination arrResult={arrResult} loading={loading} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </>

}
export default SearchKey