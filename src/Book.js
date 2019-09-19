import React from 'react'
const Book = ({ id, name, url, image } ) => {
return(
    <div className='aaa'>
        <span className='card block tc'>
            <a href={url} >
        <div title={`${name}`} className='bg-light-yellow grow dib br4 pa3 cp ma2 hover bw2 shadow=8'>
            <img src={`./image/${id}.png`} className='br4' alt={name} />
            <p className='light-yellow'>{name}</p>
            </div>
            </a>
        </span>
    </div>
)
}
export default Book;