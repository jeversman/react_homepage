import * as React from 'react';
import {Component} from 'react';

export class MainPage extends Component {
    render() {
        return (
            <div>
                <h1> Home Page!11 </h1>
                <button onClick={() => this.buttonClicked()}> Screen 1 </button>
                <button onClick={() => this.buttonClicked()}> Screen 2 </button>
            </div>
        );
    }

    buttonClicked() {
        console.log("CLICKED");
    }
}