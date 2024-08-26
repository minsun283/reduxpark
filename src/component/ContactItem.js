import React from 'react'
import { Container,Col,Row,Form,Button} from 'react-bootstrap';


const ContactItem = ({item}) => {
  return (
    <div className='item'>
     <Row>
    <Col lg={2}><img width={90} src="https://i.pinimg.com/474x/3e/c0/d4/3ec0d48e3332288604e8d48096296f3e.jpg"/></Col> 
    <Col lg={10}>
    <Row>
        <Col lg={2}><h4>{item.name}</h4></Col>
        <Col lg={9}><h4>{item.phonNumber}</h4></Col>
    </Row> 
    <Row>
    <div className='memo'>{item.memo}</div>
    </Row>
    </Col>
</Row></div>

  )
}

export default ContactItem