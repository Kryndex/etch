const dom = require('./dom')
const {initialize, update, updateSync, destroy, destroySync, onUpdate} = require('./component-helpers')
const {setScheduler, getScheduler} = require('./scheduler-assignment')

module.exports = {
  dom,
  initialize, update, updateSync, destroy, destroySync, onUpdate,
  setScheduler, getScheduler
}
