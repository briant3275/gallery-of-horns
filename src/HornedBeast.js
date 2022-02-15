import React from 'react';


class HornedBeast extends React.Component {
    render(){
        return(
            <>
            <h3>{this.props.title}</h3>
            <img
            src={this.props.img}
            alt={this.props.img}
            title={this.props.title}
            />
            <p>{this.props.description}</p>
            </>
        );
    }
}

export default HornedBeast;