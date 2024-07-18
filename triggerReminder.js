const cron = require('node-cron');
const moment = require('moment-timezone');
const { textToSpeech } = require('./textToVoice');

// Function to be triggered
const triggerFunction = (message) => {
  textToSpeech(message,0);
};


const setReminder = (timeInIST, message) => {
  console.log("Reminder is set for: ", timeInIST);
  const timeInUTC = moment.tz(timeInIST, 'HH:mm', 'Asia/Kolkata').utc().format('HH:mm');
  const [hour, minute] = timeInUTC.split(':');

  cron.schedule(`0 ${minute} ${hour} * * *`, () => {
    triggerFunction(message);
  }, {
    timezone: 'UTC'
  });
  
  console.log('Task scheduled in IST time zone.');
};
module.exports = {setReminder}
