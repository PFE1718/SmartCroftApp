import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class TimeHabit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      expended: false,
      toRemove: true
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card expanded={this.state.expanded}>
          <CardHeader
            title={`Triggered at ${this.props.habit.time}`}
            subtitle="Time habit"
            avatar={`http://via.placeholder.com/150/${
              this.props.avatarBackground
            }/${this.props.avatarColor}?text=H`}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {this.props.habit.automatized ? (
              <p>
                <i className="fas fa-check" style={{ color: '#63CB6C' }} />&nbsp;&nbsp;This
                habit has been automatized for you
              </p>
            ) : (
              <p>
                <i className="fas fa-times" style={{ color: '#FF6C5A' }} />&nbsp;&nbsp;This
                habit has not been automatized for you
              </p>
            )}
            <ul>
              {this.props.habit.intents.map(intent => (
                <li key={intent.id}>
                  {intent.displayName}
                  <br />
                  <em>{intent.last_utterance}</em>
                </li>
              ))}
            </ul>
          </CardText>
          <CardActions style={{ textAlign: 'center' }}>
            {this.props.habit.automatized !== 0 && (
              <FlatButton
                label="Off"
                labelStyle={{ color: 'white' }}
                style={{ width: '40%' }}
                backgroundColor="#54B6EE"
                onClick={() => this.props.handleUpdate(this.props.habit.id, 0)}
              />
            )}
            {this.props.habit.automatized !== 1 && (
              <FlatButton
                label="Auto"
                style={{ width: '40%' }}
                labelStyle={{ color: 'white' }}
                backgroundColor="#54B6EE"
                onClick={() => this.props.handleUpdate(this.props.habit.id, 1)}
              />
            )}
            {this.props.habit.automatized !== 2 && (
              <FlatButton
                label="Confirm"
                style={{ width: '40%' }}
                labelStyle={{ color: 'white' }}
                backgroundColor="#54B6EE"
                onClick={() => this.props.handleUpdate(this.props.habit.id, 2)}
              />
            )}
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )
  }
}
