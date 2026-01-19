/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wnezcbr9d4dofvccif3wwc0n', // Hardcode your ID here
    dataset: 'production'                  // Hardcode your dataset here
  },
  deployment: {
    appId: 'wnezcbr9d4dofvccif3wwc0n',
  }
})