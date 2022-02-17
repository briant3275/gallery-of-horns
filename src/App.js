import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast.js'
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast
    })
  }


  render() {
    return (
      <Container>
        <Header />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beast = {this.state.beast}
        />
        <Main data={data} handleShowModal={this.handleShowModal} />
        <Footer />
      </Container>
    );
  }
}

export default App;