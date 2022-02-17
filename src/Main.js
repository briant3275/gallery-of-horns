import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {



    render() {

        let beastArr = this.props.data.map((beast, index) => (
            <Col key={index}>
                <HornedBeast
                    beast={beast}
                    handleShowModal={this.props.handleShowModal}
                />
            </Col>
        ))
        return (
            <main>
                <Container>
                    <Row xs={1} sm={2} md={4} lg={5}>
                        {beastArr}
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Main;