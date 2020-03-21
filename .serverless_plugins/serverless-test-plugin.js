'use strict';

class TestPlugin {
  constructor(serverless, options) {
    this.options = options;
    this.commands = {
      options: {
        usage: 'Options viewer',
        lifecycleEvents: ['options'],
        commands: {
          log: {
            usage: 'Log all options',
            options: {
              zero: { default: 0 },
              'empty-string': { default: '' },
              false: { default: false }
            },
            lifecycleEvents: ['log']
          }
        }
      }
    };

    this.hooks = {
      'options:log:log': () => this.log()
    };
  }

  log() {
    console.log('log()');
    console.log(JSON.stringify(this.options));
  }
}

module.exports = TestPlugin;
