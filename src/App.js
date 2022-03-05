import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast.js'
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';
import { Form, ListGroup } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      data: data,
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

  handleSelectedHorns = (event) => {
    let selected = event.target.value;
    console.log(selected);
    if (selected === 'one') {
      let newSelectedBeast = data.filter(beast => beast.horns === 1);
      this.setState({ data: newSelectedBeast })
    } else if (selected === 'two') {
      let newSelectedBeast = data.filter(beast => beast.horns === 2);
      this.setState({ data: newSelectedBeast })
    } else if (selected === 'most') {
      let newSelectedBeast = data.filter(beast => beast.horns === 100);
      this.setState({ data: newSelectedBeast })
    } else {
      this.setState({ data: data })
    }
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let selected = event.target.selected.value;
  //   this.setState({
  //     submitSelected: selected
  //   });
  // }


  render() {
    console.log(this.state);
    let beastList = this.state.data.map((beast, idx) => (
      <ListGroup.Item key={idx}>{beast}</ListGroup.Item>
    ))
    return (
      <>
        <Header />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beast={this.state.beast}
        />

        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="selected">
              <Form.Select onChange={this.handleSelectedHorns}>
                <option value="all">All</option>
                <option value="one">One horn</option>
                <option value="two">Two horns</option>
                <option value="most">One hundred horns</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>

        <Main
          data={this.state.data}
          handleShowModal={this.handleShowModal}
          selectedBeast={this.state.selectedBeast}
          handleSelectHorns={this.handleSelectHorns} />
        <Footer />
      </>
    );
  }
}

export default App;