import React from 'react';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

    handleVote = () => {
        this.setState({
            votes: this.state.votes + 1
        });
    }

    handleBeastClick = () => {
        this.props.handleShowModal(this.props.beast);
        this.handleVote();
    }

    render() {
        return (
            <Card >
                <Card.Title>{this.props.beast.title}</Card.Title>
                <Card.Text>🤘: {this.state.votes}</Card.Text>
                <Card.Img
                    onClick={this.handleBeastClick}
                    src={this.props.beast.image_url}
                    alt={this.props.beast.title}
                    title={this.props.beast.title}
                >
                </Card.Img>
                <Card.Text>{this.props.beast.description}</Card.Text>
            </Card>
        );
    }
}

export default HornedBeast;