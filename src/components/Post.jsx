import React from 'react'
// import { Outlet } from 'react-router-dom';
import Postlist from './Postlist';
import classes from './Post.module.css'
// const name=['Qalab', 'ubaid']
const Post = (props) => {
    // const chosenname=Math.random()>0.5 ? name[0]:name[1];
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  )
}

export default Post;
