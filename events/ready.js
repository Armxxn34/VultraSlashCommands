module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
console.log('Connected to index.js')
require('../connectToMongo.js')
     const activities = [
    `Vultra`,
    `WE ARE BACK`,
    //y'all can add more ig
  ];
  let i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: `LISTENING` }), 5000);
}
 };
