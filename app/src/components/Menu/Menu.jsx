import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Save, FiberManualRecord, ExitToApp, Home } from 'material-ui-icons'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { remote } from 'electron'

export default class Menu extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div
          style={{
            position: 'fixed',
            backgroundColor: '#00b7ff',
            zIndex: 1000,
            boxShadow: '0px 3px 5px 0px #656565',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '50px',
            color: 'white',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90%2C150 0%2C300 180%2C300'/%3E%3Cpolygon points='90%2C150 180%2C0 0%2C0'/%3E%3Cpolygon fill='%23AAA' points='270%2C150 360%2C0 180%2C0'/%3E%3Cpolygon fill='%23DDD' points='450%2C150 360%2C300 540%2C300'/%3E%3Cpolygon fill='%23999' points='450%2C150 540%2C0 360%2C0'/%3E%3Cpolygon points='630%2C150 540%2C300 720%2C300'/%3E%3Cpolygon fill='%23DDD' points='630%2C150 720%2C0 540%2C0'/%3E%3Cpolygon fill='%23444' points='810%2C150 720%2C300 900%2C300'/%3E%3Cpolygon fill='%23FFF' points='810%2C150 900%2C0 720%2C0'/%3E%3Cpolygon fill='%23DDD' points='990%2C150 900%2C300 1080%2C300'/%3E%3Cpolygon fill='%23444' points='990%2C150 1080%2C0 900%2C0'/%3E%3Cpolygon fill='%23DDD' points='90%2C450 0%2C600 180%2C600'/%3E%3Cpolygon points='90%2C450 180%2C300 0%2C300'/%3E%3Cpolygon fill='%23666' points='270%2C450 180%2C600 360%2C600'/%3E%3Cpolygon fill='%23AAA' points='270%2C450 360%2C300 180%2C300'/%3E%3Cpolygon fill='%23DDD' points='450%2C450 360%2C600 540%2C600'/%3E%3Cpolygon fill='%23999' points='450%2C450 540%2C300 360%2C300'/%3E%3Cpolygon fill='%23999' points='630%2C450 540%2C600 720%2C600'/%3E%3Cpolygon fill='%23FFF' points='630%2C450 720%2C300 540%2C300'/%3E%3Cpolygon points='810%2C450 720%2C600 900%2C600'/%3E%3Cpolygon fill='%23DDD' points='810%2C450 900%2C300 720%2C300'/%3E%3Cpolygon fill='%23AAA' points='990%2C450 900%2C600 1080%2C600'/%3E%3Cpolygon fill='%23444' points='990%2C450 1080%2C300 900%2C300'/%3E%3Cpolygon fill='%23222' points='90%2C750 0%2C900 180%2C900'/%3E%3Cpolygon points='270%2C750 180%2C900 360%2C900'/%3E%3Cpolygon fill='%23DDD' points='270%2C750 360%2C600 180%2C600'/%3E%3Cpolygon points='450%2C750 540%2C600 360%2C600'/%3E%3Cpolygon points='630%2C750 540%2C900 720%2C900'/%3E%3Cpolygon fill='%23444' points='630%2C750 720%2C600 540%2C600'/%3E%3Cpolygon fill='%23AAA' points='810%2C750 720%2C900 900%2C900'/%3E%3Cpolygon fill='%23666' points='810%2C750 900%2C600 720%2C600'/%3E%3Cpolygon fill='%23999' points='990%2C750 900%2C900 1080%2C900'/%3E%3Cpolygon fill='%23999' points='180%2C0 90%2C150 270%2C150'/%3E%3Cpolygon fill='%23444' points='360%2C0 270%2C150 450%2C150'/%3E%3Cpolygon fill='%23FFF' points='540%2C0 450%2C150 630%2C150'/%3E%3Cpolygon points='900%2C0 810%2C150 990%2C150'/%3E%3Cpolygon fill='%23222' points='0%2C300 -90%2C450 90%2C450'/%3E%3Cpolygon fill='%23FFF' points='0%2C300 90%2C150 -90%2C150'/%3E%3Cpolygon fill='%23FFF' points='180%2C300 90%2C450 270%2C450'/%3E%3Cpolygon fill='%23666' points='180%2C300 270%2C150 90%2C150'/%3E%3Cpolygon fill='%23222' points='360%2C300 270%2C450 450%2C450'/%3E%3Cpolygon fill='%23FFF' points='360%2C300 450%2C150 270%2C150'/%3E%3Cpolygon fill='%23444' points='540%2C300 450%2C450 630%2C450'/%3E%3Cpolygon fill='%23222' points='540%2C300 630%2C150 450%2C150'/%3E%3Cpolygon fill='%23AAA' points='720%2C300 630%2C450 810%2C450'/%3E%3Cpolygon fill='%23666' points='720%2C300 810%2C150 630%2C150'/%3E%3Cpolygon fill='%23FFF' points='900%2C300 810%2C450 990%2C450'/%3E%3Cpolygon fill='%23999' points='900%2C300 990%2C150 810%2C150'/%3E%3Cpolygon points='0%2C600 -90%2C750 90%2C750'/%3E%3Cpolygon fill='%23666' points='0%2C600 90%2C450 -90%2C450'/%3E%3Cpolygon fill='%23AAA' points='180%2C600 90%2C750 270%2C750'/%3E%3Cpolygon fill='%23444' points='180%2C600 270%2C450 90%2C450'/%3E%3Cpolygon fill='%23444' points='360%2C600 270%2C750 450%2C750'/%3E%3Cpolygon fill='%23999' points='360%2C600 450%2C450 270%2C450'/%3E%3Cpolygon fill='%23666' points='540%2C600 630%2C450 450%2C450'/%3E%3Cpolygon fill='%23222' points='720%2C600 630%2C750 810%2C750'/%3E%3Cpolygon fill='%23FFF' points='900%2C600 810%2C750 990%2C750'/%3E%3Cpolygon fill='%23222' points='900%2C600 990%2C450 810%2C450'/%3E%3Cpolygon fill='%23DDD' points='0%2C900 90%2C750 -90%2C750'/%3E%3Cpolygon fill='%23444' points='180%2C900 270%2C750 90%2C750'/%3E%3Cpolygon fill='%23FFF' points='360%2C900 450%2C750 270%2C750'/%3E%3Cpolygon fill='%23AAA' points='540%2C900 630%2C750 450%2C750'/%3E%3Cpolygon fill='%23FFF' points='720%2C900 810%2C750 630%2C750'/%3E%3Cpolygon fill='%23222' points='900%2C900 990%2C750 810%2C750'/%3E%3Cpolygon fill='%23222' points='1080%2C300 990%2C450 1170%2C450'/%3E%3Cpolygon fill='%23FFF' points='1080%2C300 1170%2C150 990%2C150'/%3E%3Cpolygon points='1080%2C600 990%2C750 1170%2C750'/%3E%3Cpolygon fill='%23666' points='1080%2C600 1170%2C450 990%2C450'/%3E%3Cpolygon fill='%23DDD' points='1080%2C900 1170%2C750 990%2C750'/%3E%3C/g%3E%3C/svg%3E\")"
          }}
        >
          <FlatButton
            icon={<Home />}
            style={{ color: 'white' }}
            onClick={() => this.props.setStep(0)}
          />
          <FlatButton
            icon={<Save />}
            style={{ color: 'white' }}
            onClick={this.props.handleSave}
          />
          <FlatButton
            icon={<FiberManualRecord />}
            style={{ color: 'white' }}
            onClick={() => this.props.setStep(1)}
          />
          <FlatButton
            icon={<ExitToApp />}
            style={{ color: 'white' }}
            onClick={() => remote.app.quit()}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
