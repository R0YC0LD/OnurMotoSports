const Discord = require("discord.js");

const sqarlex1 = new Discord.Client();
const sqarlex2 = new Discord.Client();
const sqarlex3 = new Discord.Client();
const sqarlex4 = new Discord.Client();
const sqarlex5 = new Discord.Client();
const sqarlex6 = new Discord.Client();
const sqarlex7 = new Discord.Client();

// Tokenleri tırnakların -> "" arasına yazınız.
const token1 = "token1";
const token2 = "token2";
const token3 = "token3";
const token4 = "token4";
const token5 = "token5";
const token6 = "token6";
const token7 = "token7";

const sesKanalID1 = "ses_kanal_id1";
const sesKanalID2 = "ses_kanal_id2";
const sesKanalID3 = "ses_kanal_id3";
const sesKanalID4 = "ses_kanal_id4";
const sesKanalID5 = "ses_kanal_id5";
const sesKanalID6 = "ses_kanal_id6";
const sesKanalID7 = "ses_kanal_id7";

sqarlex1.login(token1);
sqarlex2.login(token2);
sqarlex3.login(token3);
sqarlex4.login(token4);
sqarlex5.login(token5);
sqarlex6.login(token6);
sqarlex7.login(token7);

sqarlex1.on('ready', () => {
  sqarlex1.channels.cache.get(sesKanalID1).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex1.user.tag} 1 numaralı hesap aktif.`);
      sqarlex1.user.setActivity('Spotify', { type: "LISTENING" });
    })
    .catch(console.error);
});

sqarlex2.on('ready', () => {
  sqarlex2.channels.cache.get(sesKanalID2).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex2.user.tag} 2 numaralı hesap aktif.`);
      sqarlex2.user.setActivity('Euro Truck Simulator 2', { type: "PLAYING" });
    })
    .catch(console.error);
});

sqarlex3.on('ready', () => {
  sqarlex3.channels.cache.get(sesKanalID3).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex3.user.tag} 3 numaralı hesap aktif.`);
      sqarlex3.user.setActivity('Rust', { type: "PLAYING" });
    })
    .catch(console.error);
});

sqarlex4.on('ready', () => {
  sqarlex4.channels.cache.get(sesKanalID4).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex4.user.tag} 4 numaralı hesap aktif.`);
      sqarlex4.user.setActivity('P0rno', { type: "WATCHING" });
    })
    .catch(console.error);
});

sqarlex5.on('ready', () => {
  sqarlex5.channels.cache.get(sesKanalID5).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex5.user.tag} 5 numaralı hesap aktif.`);
      sqarlex5.user.setActivity('Immortals Fenyx Rising', { type: "PLAYING" });
    })
    .catch(console.error);
});

sqarlex6.on('ready', () => {
  sqarlex6.channels.cache.get(sesKanalID6).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex6.user.tag} 6 numaralı hesap aktif.`);
      sqarlex6.user.setActivity('Left 4 Dead 2', { type: "PLAYING" });
    })
    .catch(console.error);
});

sqarlex7.on('ready', () => {
  sqarlex7.channels.cache.get(sesKanalID7).join()
    .then(connection => {
      console.log(`[Aktif] - ${sqarlex7.user.tag} 7 numaralı hesap aktif.`);
      sqarlex7.user.setActivity('Twitch', { type: "STREAMING", url: "https://www.twitch.tv/sqarlex223334444555556666667777777" });
    })
    .catch(console.error);
});
