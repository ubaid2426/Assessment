import React from 'react'
import classes from './Newpost.module.css'
import { useState } from 'react';
import Postlist from './Postlist';
const Newpost = (props) => {
    // const [enteredBody, setenteredBody]=useState();
    // let enteredBody= '';
    // function changeBodyhandler(event){
    //   setenteredBody(event.target.value);
    // }
    const [enteredBody, setenteredBody]=useState('');
    const [enteredauthor, setenteredauthor]=useState('');
    function changeBodyhandler(event){
      setenteredBody(event.target.value);
    }
    function changeauthorhandler(event){
      setenteredauthor(event.target.value);
    }
    function onsubmithandler(event){
       event.preventDefault();
       const postdata= {
        body:enteredBody,
        author:enteredauthor
       
       }
      //  console.log(postdata);
      props.onaddpost(postdata);
       props.oncancel();
    }
  return (
    <div>
      <form className={classes.form} onSubmit={onsubmithandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea name="" id="body" rows={3} onChange={changeBodyhandler}/>
        </p>
        {/* <p>{enteredBody}</p> */}
        <p><label htmlFor="name">Text</label>
        <input type='text' id="name" required onChange={changeauthorhandler} ></input>
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={props.oncancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>

    </div>
  )
}

export default Newpost;
