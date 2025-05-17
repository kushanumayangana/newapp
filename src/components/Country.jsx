import React from 'react'
import './Test.css';
import { Link } from 'react-router-dom';



function Country(props) {
  return (
    <><div className='cnt'><ul><li>about country of{props.name} and cpital city is {props.city}</li>{props.children}</ul></div>
  <Link to="/Help">click here</Link>
  </>
  )
}

export default Country