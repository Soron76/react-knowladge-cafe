import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingtime] = useState(0);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingtime(readingTime + time);
    console.log('remove', id);

    const remainigBokkmarks = bookmarks.filter(bookmark =>bookmark.id !==id);

    setBookmarks(remainigBokkmarks);

  }


  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
          ></Bookmarks>

      </div>

    </>
  )
}

export default App
