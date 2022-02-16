import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {

    constructor(props){
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

    render(){
        return(
            <Card style={{ width: '18rem'}}>
            <h3 >{this.props.title}</h3>
            <p>🤘: {this.state.votes}</p>
            <img
            onClick={this.handleVote}
            src={this.props.img}
            alt={this.props.title}
            title={this.props.title}
            />
            <p>{this.props.description}</p>
            </Card>
        );
    }
}

export default HornedBeast;