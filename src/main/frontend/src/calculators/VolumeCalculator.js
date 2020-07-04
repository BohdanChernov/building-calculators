import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import Axios from "axios";

class VolumeCalculator extends Component {

    state = {
        height: 0,
        heightUnits: "MM",
        width: 0,
        widthUnits: "MM",
        length: 0,
        lengthUnits: "MM",
        result: 0,
        resultUnits: "MM",
    }

    onSubmit = (event) => {
        event.preventDefault();

        Axios
            .post("http://localhost:8080/getVolumeResult",
                {
                    width: this.state.width,
                    length: this.state.length,
                    height: this.state.height,

                    widthUnits: this.state.widthUnits,
                    lengthUnits: this.state.lengthUnits,
                    heightUnits: this.state.heightUnits,

                    resultUnits: this.state.resultUnits
                })
            .then(response => {
                this.setState({result: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Income data:</Label>
                    </Col>
                    <Col>
                        <Label for="exampleSelect">Units:</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Input name="height" type="text" placeholder="Height" onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input name="heightUnits" type="select" onChange={this.onChange}>
                                <option value="MM">mm</option>
                                <option value="CM">cm</option>
                                <option value="M">m</option>
                                <option value="KM">km</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Input name="width" type="text" placeholder="Width" onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input name="widthUnits" type="select" onChange={this.onChange}>
                                <option value="MM">mm</option>
                                <option value="CM">cm</option>
                                <option value="M">m</option>
                                <option value="KM">km</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormGroup>
                            <Input name="length" type="text" placeholder="Length" onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input name="lengthUnits" type="select" onChange={this.onChange}>
                                <option value="MM">mm</option>
                                <option value="CM">cm</option>
                                <option value="M">m</option>
                                <option value="KM">km</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col style={{textAlign: "right"}}>
                        Result units:
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input name="resultUnits" type="select" onChange={this.onChange}>
                                <option value="MM">mm^3</option>
                                <option value="CM">cm^3</option>
                                <option value="M">m^3</option>
                                <option value="KM">km^3</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col style={{textAlign: "right"}}>
                        Result:
                    </Col>
                    <Col>
                        <Input type="text" placeholder="Result" value={this.state.result}/>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <FormGroup>
                            <Button type="submit" style={{marginTop: "15px"}}>Get/Refresh result</Button>
                        </FormGroup>
                    </Col>
                </Row>

            </Form>

        );
    }
}

export default VolumeCalculator;