import React from 'react';
import Link from 'react-router-dom/Link';
import Spinner from './Spinner';
import { ListGroup, Row, Col } from 'react-bootstrap';

class BreedsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            loading: true
        };
    }

    componentDidMount() {
        fetch('https://api.thecatapi.com/v1/breeds', {
            headers: {
                'x-api-key': '730b041c-83c6-4617-9ca4-657ad0005b74'
            }
        })
        .then(res => res.json())
        .then(result => this.setState({
            items: result,
            loading: false
        }))
        .catch(error => this.setState({
            error: error,
            loading: false
        }));
    }

    render() {
        if (this.state.loading) {
            return <Spinner />;
        } else if (this.state.error) {
            return <p>{this.state.error}</p>;
        } else {
            const items = this.state.items.map(breed => <Link to={`/${breed.id}`} className="list-group-item">{breed.name}</Link>);
            return <>
                <Row className="mt-4 mb-2">
                    <Col>
                        <h2>Select a breed:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {items}
                        </ListGroup>
                    </Col>
                </Row>
            </>;
        }
    }
}

export default BreedsList;