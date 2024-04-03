import React from "react";

const ListCard = ({arrResult, loading}) => {
    
    if (arrResult.length === 0) {
        return <p> Нет данных</p>
    }
    
    return <>
        {arrResult && arrResult.map(item => (
            <div key={item.id} className='card'>
            <a href={item.html_url} target='blank'>
              <p className='card_name'>{item.name}</p>
              </a>
            <div className='line1'>
              <img className='card_avatar' src={item.owner.avatar_url} alt="avatar" />
              <a href={item.owner.html_url} target='blank'><p className='card_author'>{item.owner.login}</p></a>
            </div>
            <div className='line2'>
              <p className='card_stargazers_count'>{item.stargazers_count}</p>
              <p className='watchers_count'>{item.watchers_count}</p>
            </div>

          </div>
        ))}
    </>
}

export default ListCard