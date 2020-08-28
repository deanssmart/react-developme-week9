import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import {Alert, Col, Row } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";


class Dates extends Component {
    constructor(props) {
        super(props);

        this.state = { dateStart: new Date(), dateEnd: new Date() };

        this.handleDateStart = this.handleDateStart.bind(this);
        this.handleDateEnd = this.handleDateEnd.bind(this);        
    }

    handleDateStart(dateStart) {
        this.setState({ dateStart });
    }

    handleDateEnd(dateEnd) {
        this.setState({ dateEnd });
    }

    render() {
        const { dateStart, dateEnd } = this.state;

        return(
            <>
                <Row className="mt-4">
                    <Col>
                        <DatePicker
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                            selected={ dateStart }
                            onChange={ this.handleDateStart }
                        />
                    </Col>
                    <Col>
                        <DatePicker
                            className="form-control"                        
                            dateFormat="dd/MM/yyyy"
                            selected={ dateEnd }
                            onChange={ this.handleDateEnd }
                        />
                    </Col>
                </Row>
                <Alert variant="primary" className="mt-4">
                    { Math.abs(Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))) }
                </Alert>
            </>
        );
    }
}

export default Dates;