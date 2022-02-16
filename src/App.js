import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';

class App extends React.Component {
  render(){
    return (
      <Container>
        <Header />
        <Main data={data}/>
        <Footer />
      </Container>
    );
  }
}

export default App;
