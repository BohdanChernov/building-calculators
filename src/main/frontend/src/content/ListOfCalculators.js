import React from 'react';
import {Link} from 'react-router-dom';

function ListOfCalculators() {
    return (
        <div>
            <Link to="/VolumeCalculator">
                <button style={volumeCalculatorButton}>VolumeCalculator</button>
            </Link>
            <Link to="/SquareCalculator">
                <button style={squareCalculatorButton}>SquareCalculator</button>
            </Link>
        </div>
    );
}

export default ListOfCalculators;

const squareCalculatorButton = {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '20px'
}

const volumeCalculatorButton = {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '20px'
}