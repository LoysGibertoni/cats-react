import React from 'react';
import Spinner from './Spinner';
import { Row, Col } from 'react-bootstrap';

class BreedDetails extends React.Component {
    constructor(props) {
        super(props);
        this.breedId = props.match.params.id;
        this.state = {
            breed: null,
            imageUrl: null,
            error: null,
            loading: true
        }
    }

    componentDidMount() {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${this.breedId}`, {
            headers: {
                'x-api-key': '730b041c-83c6-4617-9ca4-657ad0005b74'
            }
        })
        .then(res => res.json())
        .then(result => this.setState({
            breed: result[0].breeds[0],
            imageUrl: result[0].url,
            loading: false
        }))
        .catch(error => this.setState({
            error: error,
            loading: false
        }));
    }

    render() {
        if (this.state.loading && !this.state.breed) {
            return <Spinner animation="border" />;
        } else if (this.state.error) {
            return <p>{this.state.error}</p>;
        } else {
            return (<>
                <Row className="align-items-center">
                    <Col md>
                        <img src={this.state.imageUrl} className="w-100" />
                    </Col>

                    <Col md className="mt-4">
                        <Row>
                            <Col>
                                <h4>{this.state.breed.name}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>{this.state.breed.description}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <p className="mb-1"><strong>Origin:</strong> {this.state.breed.origin}</p>
                    </Col>
                    <Col xs="auto">
                        <p className="mb-1"><strong>Life span:</strong> {`${this.state.breed.life_span} years`}</p>
                    </Col>
                    <Col xs="6" />
                </Row>
                <Row>
                    <Col>
                        <p><strong>Temperament:</strong> {this.state.breed.temperament}</p>
                    </Col>
                </Row>
            </>);
        }
    }
}

export default BreedDetails;