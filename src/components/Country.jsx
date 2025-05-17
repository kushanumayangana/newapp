import React from 'react'
import './Test.css';
import {Link} from 'react-router-dom';
import Help from './Page.js/Help.jsx';

function Country(props) {
  return (
    <><div className='cnt'><ul><li>about country of{props.name} and cpital city is {props.city}</li>{props.children}</ul></div>
  <link to="/Help">click here</link>
  </>
  )
}

export default Country