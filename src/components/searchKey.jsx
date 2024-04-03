import React from "react";

const SearchKey = ({searchKey, setSearchKey, getData, setLoading, setArrResult}) => {

    async function LoadData (searchKey) {
        setLoading(true)
        await getData(searchKey).then(data => saveData(data.items))
    }
    function saveData (result) {
        setArrResult(result)
        setLoading(false)
    }

    return <>

        <input placeholder="Начните вводить текст для поиска (не менее трех символов)" value={searchKey} onChange={event => setSearchKey(event.target.value)}/>
        <button onClick={() => LoadData(searchKey)}>Поиск</button>
    
    </>

}
export default SearchKey