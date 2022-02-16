import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {

        let beastArr = this.props.data.map((beast, index) => (
            <HornedBeast 
                key={index}
                title={beast.title}
                img={beast.image_url}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
            />
        ))
        return(
            <main>
                <Container>
                    <Row md={4}>
                {beastArr}
                </Row>
                </Container>
            </main>
        );
    }
}

export default Main;