import React, { useState } from "react";
import classNames from "classnames";
import ListCard from "./listCard";

const Pagination = ({ arrResult, loading, currentPage, setCurrentPage }) => {

    
    const [cardPerPage] = useState(6)

    const lastCardIndex = currentPage * cardPerPage;
    const firstCardIndex = lastCardIndex - cardPerPage;
    let currentCards = []
    if (arrResult.length > 0 && arrResult !== undefined) {
        currentCards = arrResult.slice(firstCardIndex, lastCardIndex);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(arrResult.length / cardPerPage); i++) {
        pageNumbers.push(i)
    }
    return (<>
        <div className='App'>
            <ListCard arrResult={currentCards} loading={loading} />
        </div>
        <div>
            <ul className="pagination">
                {!loading && pageNumbers.map(number => (
                    <li key={number}>
                        <button className={classNames("page-link", { "page-link-active": number === currentPage })} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))

                }
            </ul>
        </div>
    </>

    )
}
export default Pagination