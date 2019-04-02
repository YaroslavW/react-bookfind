import React, { Component } from 'react';
import Header from './Components/Header';
import Books from './Components/Books'
import {Container, Col, Row} from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      books: [],
      text: 'Harry Potter'
    }
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12}>
              <Books />
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
