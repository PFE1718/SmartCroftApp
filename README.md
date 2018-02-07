<img src="https://mycroft.ai/wp-content/uploads/2017/06/Mycroft_Site_Logo.png" height="auto" width="200px">

# Mycroft automation manager

As an external tool for our [Mycroft Habits Miner](https://github.com/PFE1718/PFE1718-habit-miner) we wanted to add a small management interface. This small piece of software takes its place.

<p align="center"><img src="https://media.giphy.com/media/26DN5w0cKVv5zugww/giphy.gif" width="50%" height="auto" style="margin-left: 50%" /></p>

## Getting started

From the root of the project run `yarn build` and then `yarn start`. You should see the application icon on top or on the bottom of your Operating System depending on which one you are running.

## Usage

### Skills manager

The first part of the application refers to the list of the habits that have already been automatized for you. You can disable them by pressing the `Disable` button on the bottom of each item. When you're done, you can press the `Save` button on top of the application to apply your changes.

### Skill recorder

You can also add an habit from the interface. Press the `Record` button on top of it. Press the `Record` button to record the triggering skill. It will wait for you to ask something to Mycroft to get it. Repeat the same step for adding more skills to the automation and then press `Save`.
