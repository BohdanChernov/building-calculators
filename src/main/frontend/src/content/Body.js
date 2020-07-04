import React from 'react';
import {Route} from 'react-router-dom';
import VolumeCalculator from "../calculators/VolumeCalculator";
import SquareCalculator from "../calculators/SquareCalculator";
import ListOfCalculators from "./ListOfCalculators";

function Body() {

    const example = function (name) {
        console.log(name);
    }

    example("hello world");

    return (



        <div style={bodyStyle}>
            <Route exact path="/" component={ListOfCalculators}/>
            <Route exact path="/VolumeCalculator" component={VolumeCalculator}/>
            <Route exact path="/SquareCalculator" component={SquareCalculator}/>
        </div>
    );
}

export default Body;

const bodyStyle = {
    backgroundColor: '#dedede',
    width: '100%',
    color: '#000000',
    padding: '20px'
}


