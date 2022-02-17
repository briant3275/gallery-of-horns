import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showModal: true,
    //         selected: this.props.title
    //     }
    // }



    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beast.image_url} alt={this.props.beast.title} className="img-fluid"/>
                    {this.props.beast.description}
                </Modal.Body>

            </Modal>

        );
    }
}

export default SelectedBeast;