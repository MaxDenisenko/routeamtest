import React from "react";

const SearchKey = ({searchKey, setSearchKey, getData, setLoading, setArrResult}) => {

    function LoadData (searchKey) {
        setLoading(true)
        getData(searchKey).then(data => saveData(data.items))
        
        setLoading(false)
    }
    function saveData (result) {
        console.log(result);
        setArrResult(result)
    }

    return <>

        <input placeholder="Начните вводить текст для поиска (не менее трех символов)" value={searchKey} onChange={event => setSearchKey(event.target.value)}/>
        <button onClick={() => LoadData(searchKey)}>Поиск</button>
    
    </>

}
export default SearchKey