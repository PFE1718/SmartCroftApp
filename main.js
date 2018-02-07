// Basic init
const Menubar = require('menubar')

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

const mb = new Menubar({
  index: `file://${__dirname}/app/index.html`,
  icon: `${__dirname}/ico/MycroftIcon.png`,
  width: 360
})

mb.on('ready', function ready() {
  console.log('Component is ready.')
})
