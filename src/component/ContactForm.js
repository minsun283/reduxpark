import React from 'react'

import { Col,Row,Form,Button} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const dispatch=useDispatch()
    const [name, setName]=useState("");
    const [phonNumber, setPhonNumber]=useState("");
    const [memo, setMemo]=useState("");

    const addContact =(event)=>{
        event.preventDefault() //리프레시 안되게 막아줌.
        dispatch({type:"ADD_CONTACT", payload:{name, phonNumber, memo}})
    }


  return (
    <div>
        
        <Form onSubmit={addContact}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>저장하기</Form.Label>
      <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(event)=>setName(event.target.value)}/> 
     
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="num" placeholder="연락처를 입력하세요" onChange={(event)=>setPhonNumber(event.target.value)}/>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="num" placeholder="메모" onChange={(event)=>setMemo(event.target.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      저장하기
    </Button>
  </Form>
  
  </div>
  )
}

export default ContactForm