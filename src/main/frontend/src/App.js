import React from 'react';
import Header from './content/Header';
import Body from './content/Body';
import Footer from './content/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container} from 'reactstrap';


function App() {
    return (
        <Router>
            <Container className="themed-container" style={containerStyle}>
                <div className="App">
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            </Container>
        </Router>
    );
}

export default App;

const containerStyle = {
    minWidth: "320px"
}
