/**
 * @param {object} [options]
 * @param {string[]} [options.paths]
 */
function commandLinePlugin (optionDefinitions, options) {
  options = options || {}
  const commandLineArgs = require('command-line-args')
  const flatten = require('reduce-flatten')
  const cliOptions = commandLineArgs(optionDefinitions, { partial: true, argv: options.argv })
  const allOptionDefinitions = optionDefinitions.concat(Array
    .from(pluginOptionDefinitions(options, cliOptions, optionDefinitions))
    .reduce(flatten, []))
  return {
    options: commandLineArgs(allOptionDefinitions, options),
    allOptionDefinitions
  }
}

function * pluginOptionDefinitions (options, cliOptions, optionDefinitions) {
  options = Object.assign({
    create: function (Plugin) {
      return new Plugin()
    }
  }, options)
  const loadModule = require('load-module')
  const arrayify = require('array-back')
  for (const def of optionDefinitions) {
    if (def.plugin) {
      const pluginRequests = arrayify(cliOptions[def.name])
      const Plugins = pluginRequests.map(p => loadModule(p, { paths: options.paths, prefix: options.prefix }))
      for (const Plugin of Plugins) {
        const plugin = options.create(Plugin)
        if (plugin.optionDefinitions) yield plugin.optionDefinitions()
      }
    }
  }
}

module.exports = commandLinePlugin
