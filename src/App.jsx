import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './components/Post'
import Post from './components/Post'
import Postlist from './components/Postlist'
import MainHeader from './components/MainHeader'
function App() {
  // const [count, setCount] = useState(0)
  const [modalvisible, setmodalvisible] = useState(false);

  function hideModalhandler(){
    setmodalvisible(false);
    console.log('eeee');
  }
  function showModalhandler(){
    setmodalvisible(true);
    console.log('hello there');
  }
  return (
    <>

  {/* <h1>Hello World</h1> */}
  <MainHeader oncreatepost={showModalhandler}/>
  {/* <Post/> */}

  {/* <Post author='Ubaid' body='React.JS is Awesome!'/>
        <Post author='Qalab' body='Champion Web Developer!'/> */}
        <Postlist isPosting={modalvisible} onstopposting={hideModalhandler}/>
    </>
  )
}

export default App;
