import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>

      </div>

    </>
  )
}

export default App
