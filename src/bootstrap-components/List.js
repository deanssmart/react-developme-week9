import React, { Component } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

export class List extends Component {
    constructor(props) {
        super(props);

        this.state = { list: [], input: "" };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    handleClick(e) { 
        e.preventDefault();       
        const { list, input } = this.state;

        if(input !== ""){        
            this.setState({ list: [...list, input], input: ""});
        }
    }

    render() {
        const { list, input } = this.state;

        return(
            <>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            value={ input }
                            type="text"
                            placeholder="To Do"
                            onChange={ this.handleChange } />
                        <Button
                            type= "submit"
                            onClick={ this.handleClick }
                            variant="primary">
                            Add
                        </Button>                        
                    </Form.Group> 
                </Form>
                <ListGroup>
                    { list.map((item, i) => (
                        <ListGroup.Item key={ i }>{ item }</ListGroup.Item>
                    )) }
                </ListGroup>           
            </>     
        );
    }
}

