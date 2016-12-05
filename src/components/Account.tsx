import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {SelectField, MenuItem} from 'material-ui';

export class Account extends Component {
    state = {
        value: null
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.addProfile(this.props.id, value);
    }

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

                        Select profile for account:
                        <br/>

                        <SelectField
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={null} primaryText="None" />

                            {
                                this.props.profiles.map(function(profile) {
                                    return <MenuItem value={profile.name} primaryText={profile.name} />
                                })
                            }

                        </SelectField>

                    </CardText>
                </Card>
            </div>
        );
    }
}