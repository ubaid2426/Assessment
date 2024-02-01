import React from 'react'
import classes from './MianHeader.module.css'
import {MdPostAdd, MdMessage} from 'react-icons/md'
const MainHeader = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage/>
            React Poster
        </h1>
        <p>
            <button className={classes.button} onClick={props.oncreatepost}>
                <MdPostAdd size={18}/>
                New post
            </button>
        </p>
      </header>
    </div>
  )
}

export default MainHeader
