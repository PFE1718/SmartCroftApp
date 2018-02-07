import { get, omit } from 'lodash'
import { isEmpty } from 'lodash/fp'
import uuid from 'uuid/v4'
import json from 'jsonfile'
import fs from 'fs'
import Events from 'events'

const dictionnaryPath = `${process.env['HOME']}/.mycroft/skills/ListenerSkill/habits/dictionnary.json`
const habitsPath = `${process.env['HOME']}/.mycroft/skills/ListenerSkill/habits/habits.json`
const logsPath = `${process.env['HOME']}/.mycroft/skills/ListenerSkill/habits/logs.json`

export function save(habits) {
  return json.writeFileSync(
    habitsPath,
    habits.map(habit => ({
      ...omit(habit, ['id']),
      intents: habit.intents.map(intent => ({
        ...omit(intent, ['id', 'displayName'])
      }))
    }))
  )
}

export function read() {
  const dictionnary = json.readFileSync(dictionnaryPath)

  const habits = json.readFileSync(habitsPath)

  return habits.map(habit => ({
    id: uuid(),
    ...habit,
    intents: habit.intents.map(intent => ({
      id: uuid(),
      ...intent,
      displayName: get(dictionnary, intent.name.split(':').shift())
    }))
  }))
}

export function watch() {
  const dictionnary = json.readFileSync(dictionnaryPath)
  const ee = new Events.EventEmitter()
  fs.watchFile(logsPath, eventType => {
    const content = fs
      .readFileSync(logsPath, 'utf8')
      .split('\n')
      .filter(str => !isEmpty(str))
    const intent = JSON.parse(content.pop())
    ee.emit('update', {
      content: {
        ...intent,
        displayName: get(dictionnary, intent.type.split(':').shift()),
        id: uuid()
      }
    })
  })
  return ee
}

export function append(recorder) {
  const toAppend = {
    intents: recorder.intents.map(intent => ({
      parameters: intent.parameters,
      name: intent.type,
      utterrance: intent.utterrance
    })),
    triggers: [0],
    automatized: 1,
    user_choice: false,
    trigger_type: 'skill'
  }
  const habits = json.readFileSync(habitsPath)
  return json.writeFileSync(habitsPath, [...habits, toAppend])
}
