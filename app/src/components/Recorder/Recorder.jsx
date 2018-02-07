import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { lightBlue400, transparent } from 'material-ui/styles/colors'
import { List, ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider'
import Loader from './Loader.jsx'
import { watch } from '../../utils/parser'

export default class Recorder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      step: 0
    }
  }

  watchLogs = () => {
    this.setState({ loading: true })
    const ee = watch()
    ee.once('update', ({ content }) => {
      this.props.pushIntent(content)
      this.setState({
        loading: false
      })
    })
  }

  render = () => {
    return (
      <MuiThemeProvider>
        <div style={{ width: '100%', height: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FlatButton
              label="Record"
              labelStyle={{ color: 'white' }}
              backgroundColor="#409CE1"
              onClick={this.watchLogs}
              style={{ width: '50%', margin: '5px' }}
            />
            <FlatButton
              label="Save"
              labelStyle={{ color: 'white' }}
              backgroundColor="#409CE1"
              onClick={this.props.saveHabit}
              style={{ width: '50%', margin: '5px' }}
              disabled={this.props.habit.intents.length <= 2}
            />
          </div>
          {this.state.loading && <Loader />}
          <List>
            {this.props.habit.intents.map((intent, index) => (
              <div>
                <ListItem
                  key={intent.id}
                  primaryText={intent.displayName}
                  leftIcon={
                    <ActionGrade
                      color={index === 0 ? lightBlue400 : transparent}
                    />
                  }
                />
                <Divider inset={true} />
              </div>
            ))}
          </List>
        </div>
      </MuiThemeProvider>
    )
  }
}
