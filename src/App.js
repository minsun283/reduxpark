import "./App.css";
import { Container, Col, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  return (
  
    <div className="container">
      <h1 className="list">연락처 리스트</h1>
      
          <div className="form-deco"><ContactForm /></div>
       
          <div className="list-deco"><ContactList /></div>
      
    </div>
  );
}

export default App;
