import React, { Component } from 'react';
import axios from 'axios';
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
  componentWillMount(){
    this.getBooks();
  }
  getBooks(){
    axios.request({
      method: 'get',
      url:'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
    }).then((response)=>{
      this.setState({
        books: response.data.items
      }, () => {console.log(this.state)});
    }).catch((error)=>{
      console.log(error)
    })
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
