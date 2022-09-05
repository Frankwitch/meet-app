const { App } = require('@slack/bolt');
const slackConfiguration = require('./slack_configuration.json')
// Initializes your app with your bot token and signing secret
const app = new App ({
    token : slackConfiguration.SLACK_BOT_TOKEN,
    signingSecret: slackConfiguration.SLACK_SIGNING_SECRET
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
