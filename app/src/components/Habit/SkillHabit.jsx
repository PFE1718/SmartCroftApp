import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { nth, defaultTo, get } from 'lodash'

export default class SkillHabit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      expended: false
    }
  }

  handleExpandChange(expanded) {
    this.setState({ expanded: expanded })
  }

  render() {
    const triggerIndex = this.props.habit.triggers.shift()
    const triggerName = get(
      nth(this.props.habit.intents, triggerIndex),
      'displayName',
      'a skill'
    )
    return (
      <MuiThemeProvider>
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
        >
          <CardHeader
            title={`Triggered by ${defaultTo(triggerName, 'a skill')}`}
            subtitle="Trigger habit"
            avatar={`http://via.placeholder.com/150/${
              this.props.avatarBackground
            }/${this.props.avatarColor}?text=${triggerName
              .replace(/(skill|mycroft)-/g, '')[0]
              .toUpperCase()}`}
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
          <CardActions>
            <FlatButton
              label="Disable"
              labelStyle={{ color: 'white' }}
              fullWidth={true}
              backgroundColor="#54B6EE"
              onClick={() => this.props.handleRemove(this.props.habit.id)}
            />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )
  }
}
