{
  "appName": "My App"
}

const response = await fetch('./config.json');
const json = await response.json();

import configData from './config.json' assert { type: "json" };
console.log(configData.appName);

import('./config.json', { assert: { type: 'json' } })

export { config } from './config.json' assert { type: 'json' };