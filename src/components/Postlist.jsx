import React from 'react'
import Post from './Post'
import { useState } from 'react'
import Newpost from './Newpost'
import classes from './Postlist.module.css'
import Modal from './Modal'
import MainHeader from './MainHeader'
const Postlist = ({isPosting,onstopposting}) => {
  const [posts, setpost]=useState([]);

  function addposthandler(postdata){
    setpost((existingposts) => [postdata, ...posts]);
  }
  // const [enteredBody, setenteredBody]=useState('');
  // const [enteredauthor, setenteredauthor]=useState('');
  // function changeBodyhandler(event){
  //   setenteredBody(event.target.value);
  // }
  // function changeauthorhandler(event){
  //   setenteredauthor(event.target.value);
  // }
  return (
    <div>
      {isPosting && (
      <Modal onClose={onstopposting}>
      {/* // <Modal onClose={console.log('joker')}> */}
      <Newpost
      // onBodyhandler={changeBodyhandler}
      // onauthorhandler={changeauthorhandler}
      oncancel={onstopposting} onaddpost={addposthandler}/>
      </Modal>
      ) }
      {posts.length >0 &&
       <ul className={classes.posts}>
       {/* <Post author={enteredauthor} body={enteredBody}/> */}
       {posts.map((post)=>
       <Post key={post.body} author={post.author} body={post.body}/>)}
       {/* <Post author={enteredauthor} body='Champion Web Developer!'/> */}
     </ul>
      }
      {posts.length === 0 && (
        <div style={{ textAlign:'center', color:'white'}}>
          <h1>There are No post here</h1>
          <p>starting adding some!</p>
        </div>
      )}
     
    </div>
  )
}

export default Postlist;
