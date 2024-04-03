import React, { useState } from "react";
import classNames from "classnames";
import ListCard from "./listCard";

const Pagination = ({ arrResult, loading, currentPage, setCurrentPage }) => {


    const [cardPerPage] = useState(6)

    const lastCardIndex = currentPage * cardPerPage;
    const firstCardIndex = lastCardIndex - cardPerPage;
    let currentCards = []
    const pageNumbers = [];
    if (arrResult.length > 0 && arrResult !== undefined) {
        currentCards = arrResult.slice(firstCardIndex, lastCardIndex);
    }

    const paginate = (pageNumber) => {
            setCurrentPage(pageNumber)
    }
    const paginateDecrement = (pageNumber) => {
            if( pageNumber > 1){
                setCurrentPage(--pageNumber)
            }
    }
    const paginateIncrement = (pageNumber) => {
        if(pageNumber < pageNumbers.length+1){
            setCurrentPage(pageNumber++)
        }
    }
    for (let i = 1; i <= Math.ceil(arrResult.length / cardPerPage); i++) {
        pageNumbers.push(i)
    }
    return (<>
        <div className='cards'>
            <ListCard arrResult={currentCards} loading={loading} />

            {!loading && <div className="paginations">
                <ul className="pagination">
                    <button className="btn_pagination" onClick={()=> paginateDecrement(currentPage)}>&lt;</button>
                    {!loading && pageNumbers.map(number => (
                        <li key={number}>
                            <button className={classNames("btn_pagination",  { "page-link-active": number === currentPage })} onClick={() => paginate(number)}>
                                {number}
                            </button>
                        </li>
                    ))
                    }
                    <button className="btn_pagination" onClick={()=> paginateIncrement(currentPage+1)}>&gt;</button>
                </ul>
            </div>}
        </div> 
    </>

    )
}
export default Pagination