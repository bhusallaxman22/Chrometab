import React from 'react';

import Book from './Book'
import Bookmark from './Bookmark';

const BookList = ({ Bookamrk }) => {
    return (
        <div>
            {
                Bookmark.map((_user, i) => {
                    return (
                        <Book 
                        key={i}
                        id={Bookmark[i].id}
                        name={Bookmark[i].name}
                        url= {Bookmark[i].url}
                        image={Bookmark[i].iamge}
                        />
                    )
                })
            }
            
        </div>
    )
}
export default BookList;