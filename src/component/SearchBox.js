import React, { useState } from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {

    const [keyword,setKeyword]=useState("")
    let dispatch = useDispatch();

    let { contact } = useSelector((state) => state);


    const searchButton=(event)=>{
        dispatch({type:"SEARCH_BUTTON", payload:{keyword}})
    }
  return (
    <div className='search-box'>
   <input className='input' placeholder="" onChange={(event) => setKeyword(event.target.value)}/>
    <button className='search-button' onClick={searchButton}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
    </div>
  )
}

export default SearchBox