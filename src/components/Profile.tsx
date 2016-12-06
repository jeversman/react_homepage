import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export class Profile extends Component {
    render() {
        return (
            <div>
                <br/>
                <Card style={{width: '30%'}}>
                    <CardHeader
                        title={this.props.name}
                        actAsExpander={true}
                    />

                    <CardText>
                        Param 1: {this.props.param1}
                        <br/>
                        <br/>
                        Param 2: {this.props.param2}
                    </CardText>
                </Card>
            </div>
        );
    }
}

