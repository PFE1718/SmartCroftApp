import React, { Component } from 'react'
import color from 'randomcolor'

import Menu from './components/Menu/Menu.jsx'
import SkillHabit from './components/Habit/SkillHabit.jsx'
import TimeHabit from './components/Habit/TimeHabit.jsx'
import Recorder from './components/Recorder/Recorder.jsx'
import { read, save, append } from './utils/parser'

import { } from './styles/global.css'

class Habit {
  constructor() {
    this.intents = []
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      recorder: new Habit(),
      habits: read()
    }
  }

  setStep = step => this.setState({ step })

  pushIntent = intent => this.state.recorder.intents.push(intent)

  saveHabit = () => {
    const { recorder } = this.state
    append(recorder)
    this.setState({
      recorder: new Habit()
    })
  }

  handleUpdate = (id, status) => {
    this.setState({
      habits: this.state.habits.map(
        habit => (habit.id === id ? { ...habit, automatized: status } : habit)
      )
    })
  }

  handleSave = () => {
    return save(this.state.habits)
  }

  render = () => {
    return (
      <div style={{ minWidth: '100%', minHeight: '100%' }}>
        <Menu handleSave={() => this.handleSave()} setStep={this.setStep} />
        {this.state.step === 0 && (
          <div className="habits">
            {this.state.habits.filter(habit => habit.user_choice || habit.trigger_type !== 'time').map(
              habit =>
                habit.trigger_type === 'time' ? (
                  <TimeHabit
                    key={habit.id}
                    handleUpdate={this.handleUpdate}
                    habit={habit}
                    avatarBackground={color({
                      hue: '#54B6EE'
                    }).replace('#', '')}
                    avatarColor="ffffff"
                  />
                ) : (
                    <SkillHabit
                      key={habit.id}
                      handleUpdate={this.handleUpdate}
                      habit={habit}
                      avatarBackground={color({
                        hue: '#54B6EE'
                      }).replace('#', '')}
                      avatarColor="ffffff"
                    />
                  )
            )}
          </div>
        )}
        {this.state.step === 1 && (
          <div className="recorder">
            <Recorder
              pushIntent={this.pushIntent}
              saveHabit={this.saveHabit}
              habit={this.state.recorder}
            />
          </div>
        )}
      </div>
    )
  }
}
