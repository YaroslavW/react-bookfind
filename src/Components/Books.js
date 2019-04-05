import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Collapsible from 'react-collapsible';

class Books extends Component {
    render() {
        let bookItems;
        if(this.props.books){
            bookItems = this.props.books.map(book => {
                let id = book.id;
                let title = book.volumeInfo.title;
                return (
                    <Collapsible key={id} trigger={title}>
                        <p>This is the collapsible content. It can be any element or React component you like.</p>
                        <p>It can even be another Collapsible component. Check out the next section!</p>
                    </Collapsible>
                    
                )
            })
        }
        return (
            <div>{bookItems}</div>

        );
    }
}

export default Books;
